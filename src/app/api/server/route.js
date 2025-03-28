import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb"; // Assuming this is your MongoDB client file

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("HydroFlowLude"); // Connect to the default database in your cluster
    const plantDataCollection = db.collection("plantData"); // Ensure collection name is correct

    const body = await req.json();

    // Validate incoming data (optional but recommended)
    if (
      typeof body.tds !== "number" ||
      typeof body.ph !== "number" ||
      typeof body.waterLevel !== "number" ||
      typeof body.temperature !== "number" ||
      typeof body.humidity !== "number"
    ) {
      return NextResponse.json({ error: "Invalid data format" }, { status: 400 });
    }

    // Insert data into MongoDB
    await plantDataCollection.insertOne({
      ...body,
      timestamp: new Date(),
    });

    return NextResponse.json({ message: "Data saved successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error saving data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
