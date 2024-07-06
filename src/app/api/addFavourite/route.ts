"use server"

import { Video } from "@/models/videoModel";
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDb } from "@/lib/utils";
import { User } from "@/models/userModel";
import mongoose from "mongoose";

export async function POST(request: Request) {
  try {
    const { movieId } = await request.json();
    const session = await auth();
    const userEmail = session?.user?.email;

    if (!userEmail) {
      return NextResponse.json({ error: 'User not authenticated' });
    }

    // Connect to database
    await connectDb();

    const video_id = new mongoose.Types.ObjectId(movieId);
    const existingMovie = await Video.findOne({ _id: video_id });
   

    if (!existingMovie) {
      throw new Error("Movie not found")
    }

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      throw new Error('User not found');
    }

    const isFavourite = user.favourites.some((fav: mongoose.Types.ObjectId) => fav != null && fav.equals(existingMovie._id));

    if (!isFavourite) {
      user.favourites.push(existingMovie._id as string);
      await user.save();
      console.log("Movie added to favourites");
      return NextResponse.json(user);
    } else {
      console.log("Movie already in favourites");
      throw new Error("Movie already in favourites")
    }

  } catch (error) {
    console.error('Error adding to favourites:');
    throw new Error("Server error")
  }
}
