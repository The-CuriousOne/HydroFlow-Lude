import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    // Parse incoming request JSON
    const { fullName, username, email, password } = await request.json();

    // Validate required fields
    if (!fullName) {
      return new Response(
        JSON.stringify({ error: "Please Enter Your Full Name" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!username) {
      return new Response(
        JSON.stringify({ error: "Please Enter Your User Name" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!email) {
      return new Response(
        JSON.stringify({ error: "Please Enter Your Email" }),
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
    // Explicitly use your database name:
    const db = client.db("HydroFlowLude");

    // Check if a user with the same email exists
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "User already exists. Please Login" }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check if the username is available
    const usernameExist = await db.collection("users").findOne({ username });
    if (usernameExist) {
      return new Response(
        JSON.stringify({ error: "Username already exists" }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    // Hash the password using bcrypt.js
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = {
      fullName,
      username,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    };

    // Insert the new user into the database
    const result = await db.collection("users").insertOne(newUser);

    return new Response(
      JSON.stringify({
        message: "User created successfully",
        userId: result.insertedId,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Signup API error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function GET(request) {
  return new Response(
    
    JSON.stringify({ message: "This endpoint only accepts POST" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
