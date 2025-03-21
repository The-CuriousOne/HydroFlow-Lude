import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
    try {
        const { username } = await req.json();
        if (!username) {
            return new Response(
                JSON.stringify({ error: "Missing username" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const client = await clientPromise;
        const db = client.db("HydroFlowLude");

        // Find user by username to get _id
        const user = await db.collection("users").findOne({ username });
        if (!user) {
            return new Response(
                JSON.stringify({ error: "User not found" }),
                { status: 404, headers: { "Content-Type": "application/json" } }
            );
        }

        // Fetch plant data where userId matches
        const plants = await db.collection("demoPlantData")
            .find({ userId: new ObjectId(user._id) })
            .toArray();

        return new Response(
            JSON.stringify({ plants }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Internal server error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

// Prevent GET requests
export async function GET(req) {
    return new Response(
        JSON.stringify({ error: "Use POST instead" }),
        { status: 405, headers: { "Content-Type": "application/json" } }
    );
}
