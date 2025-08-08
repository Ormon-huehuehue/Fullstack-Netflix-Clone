import { connectDb } from "@/lib/utils";
import { Video } from "@/models/videoModel";
import { NextResponse } from "next/server";

export async function GET() {
    await connectDb();

    try {
        const randomVideo = await Video.aggregate([
            { $sample: { size: 1 } }
        ]);

        if (randomVideo.length > 0) {
            return NextResponse.json(randomVideo[0]);
        } else {
            return NextResponse.json({ message: "No video found" }, { status: 404 });
        }
    } catch (error) {
        console.error('Failed to fetch random video URL:', error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
