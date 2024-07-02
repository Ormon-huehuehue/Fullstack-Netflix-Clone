"use server"

import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDb } from "@/lib/utils";
import { User } from "@/models/userModel";
import mongoose from 'mongoose';

export async function GET(request: Request) {
  try {
    const session = await auth();
    const userEmail = session?.user?.email;

    if (!userEmail) {
      console.error("User not authenticated");
      return NextResponse.json({ error: 'User not authenticated' });
    }

    console.log(`Authenticated user: ${userEmail}`);

    // Connect to the database
    await connectDb();

    // Find the user and populate the favourites
    const user = await User.findOne({ email: userEmail }).populate('favourites');

    if (!user) {
      console.error("User not found");
      return NextResponse.json({ error: 'User not found' });
    }

    console.log(`Found user: ${user.email}`);
    // console.log(`Favourites: ${JSON.stringify(user.favourites)}`);

    return NextResponse.json(
      user.favourites as mongoose.Types.ObjectId[]
  );

  } catch (error) {
    console.error('Error fetching favourites:', error);
    return NextResponse.json({ error: 'Server error' });
  }
}
