export const dynamic = 'force-dynamic';

import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    // Parse incoming request JSON
    const { username, password } = await request.json();

    // Validate required fields
    if (!username) {
      return new Response(
        JSON.stringify({ error: "Please Enter Your User Name" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!password) {
      return new Response(
        JSON.stringify({ error: "Please Enter Your Password" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const client = await clientPromise;
    const db = await client.db("HydroFlowLude");

    // Find the user by username
    const user = await db.collection("users").findOne({ username });
    if (!user) {
      return new Response(
        JSON.stringify({ error: "User does not exist" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return new Response(
        JSON.stringify({ error: "Incorrect password" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    // Optionally, you could generate a JWT or session token here.
    // For now, we return a success message along with user details (excluding the password)
    const { password: _, ...userWithoutPassword } = user;

    return new Response(
      JSON.stringify({
        message: "Login successful",
        user: userWithoutPassword,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Login API error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function GET(request) {
  return new Response(
    JSON.stringify({ message: "This endpoint only accepts POST" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
