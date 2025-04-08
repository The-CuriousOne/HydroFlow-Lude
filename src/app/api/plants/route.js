import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// GET: Fetch plant data
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("HydroFlowLude");
    const plantDataCollection = db.collection("plantData");

    // For now, fixed userID (replace with dynamic value later)
    const userID = new ObjectId("67b211dbd470dba8e81014f6");

    const plantData = await plantDataCollection.findOne({ userID });

    if (!plantData) {
      return NextResponse.json({ plants: [] }, { status: 200 });
    }

    return NextResponse.json({ plants: [plantData] }, { status: 200 });
  } catch (error) {
    console.error("Error fetching plant data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
