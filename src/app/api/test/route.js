import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET(request) {
  try {
    // Wait for the client to be connected
    const client = await clientPromise;
    // Optionally, select the database (e.g. "HydroFlowLude")
    const db = client.db("HydroFlowLude");
    
    // For example, list all collection names
    const collections = await db.collections();
    const collectionNames = collections.map((collection) => collection.collectionName);

    return NextResponse.json({
      connected: true,
      collections: collectionNames
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return NextResponse.json({ connected: false, error: error.message }, { status: 500 });
  }
}
