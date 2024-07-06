"use server"

import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDb } from "@/lib/utils";
import { User } from "@/models/userModel";
import { Video } from "@/models/videoModel"; // Import the Video model
import { movieInterface } from "@/components/MovieList";

// Adjust the function signature to directly accept an array of string IDs
const getFavourites = async (favouritesId: string[]) => {

    const session = await auth();
    const userEmail = session?.user?.email;

    if (!userEmail) {
      console.error("User not authenticated");
      return NextResponse.json({ error: 'User not authenticated' });
    }
    // Connect to the database
    await connectDb();

    // Use the favouritesId array to fetch the corresponding videos
    const videos = await Video.find({
      '_id': { $in: favouritesId }
    }) as movieInterface[];

    if (!videos || videos.length === 0) {
      console.error("Videos not found");
      return NextResponse.json({ error: 'Videos not found' });
    }
    
    return videos;
}

export default getFavourites;