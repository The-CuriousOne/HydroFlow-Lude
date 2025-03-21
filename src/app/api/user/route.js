import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    try {
        const { username } = await request.json();

        if (!username) {
            return new Response(
                JSON.stringify({ error: "Username is required" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const client = await clientPromise;
        const db = client.db("HydroFlowLude");

        // Find user by username
        const user = await db.collection("users").findOne({ username });

        if (!user) {
            return new Response(
                JSON.stringify({ error: "User not found" }),
                { status: 404, headers: { "Content-Type": "application/json" } }
            );
        }

        // Send user data (excluding password)
        return new Response(
            JSON.stringify({
                username: user.username,
                fullName: user.fullName,
                email: user.email,
                profileImage: user.profileImage || "/images/profile.png",
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );

    } catch (error) {
        console.error("❌ Error fetching user data:", error);
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
