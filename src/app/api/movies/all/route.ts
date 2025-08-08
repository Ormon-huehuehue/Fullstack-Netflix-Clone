import { connectDb } from "@/lib/utils";
import { Video } from "@/models/videoModel";
import { NextResponse } from "next/server";

export async function GET() {
    await connectDb();

    try {
        const movies = await Video.find({});
        return NextResponse.json(movies);
    } catch (error) {
        console.error('Failed to fetch movies:', error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
