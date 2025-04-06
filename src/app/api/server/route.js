import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb"; // Your MongoDB client setup

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("HydroFlowLude");
    const plantDataCollection = db.collection("plantData");

    const body = await req.json();

    // ✅ Validate incoming data
    if (
      typeof body.tds !== "number" ||
      typeof body.ph !== "number" ||
      typeof body.waterLevel !== "number" ||
      typeof body.temperature !== "number" ||
      typeof body.humidity !== "number"
    ) {
      return NextResponse.json({ error: "Invalid data format" }, { status: 400 });
    }

    // ✅ Use correct ObjectId
    const userID = new ObjectId("67aa3b55294b0f05a5c181c2");

    // ✅ Build filter and update objects
    const filter = { userID };
    const update = {
      $set: {
        userID, // ensure it's always included
        ...body,
        timestamp: new Date(),
      },
    };
    const options = { upsert: true };

    // ✅ Upsert: update if exists, insert otherwise
    const result = await plantDataCollection.updateOne(filter, update, options);

    if (result.upsertedCount > 0) {
      return NextResponse.json({ message: "New record created successfully" }, { status: 201 });
    } else {
      return NextResponse.json({ message: "Record updated successfully" }, { status: 200 });
    }
  } catch (error) {
    console.error("Error saving data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
