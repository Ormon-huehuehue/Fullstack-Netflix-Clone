"use server"

import { auth } from "@/auth";
import { connectDb } from "@/lib/utils";
import { User } from "@/models/userModel";
import { NextResponse } from "next/server";


const getCurrentUser = async () => {
    const session = await auth();
    const userEmail = session?.user?.email;
    
    if (!userEmail) {
      console.error("User not authenticated");
      return NextResponse.json({ error: 'User not authenticated' });
    }
    // Connect to the database
    await connectDb();
    
    // Find the user and populate the favourites
    const user = await User.findOne({ email: userEmail });

    

    return user
}

export default getCurrentUser;