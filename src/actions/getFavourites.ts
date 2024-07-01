"use server"

import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDb } from "@/lib/utils";
import { User } from "@/models/userModel";

const getFavourites = async () => {
  try {
    const session = await auth();
    const userEmail = session?.user?.email;

    if (!userEmail) {
      console.error("User not authenticated");
      return NextResponse.json({ error: 'User not authenticated' });
    }
    // Connect to the database
    await connectDb();

    // Find the user and populate the favourites
    const user = await User.findOne({ email: userEmail }).populate('favourites');

    if (!user) {
      console.error("User not found");
      return NextResponse.json({ error: 'User not found' });
    }
    const favourites = user.favourites;
    return favourites;


  } catch (error) {
    console.error('Error fetching favourites:', error);
    return NextResponse.json({ error: 'Server error' });
  }
}


export default getFavourites;

// export const fetchFavourites = async () => {
//   console.log("fetchFavourites called")
//     const response = await fetch('http://localhost:3000/api/favourites');
//     if (!response.ok) {
//       console.log('Failed to fetch favourites');
//     }
//     return response.json();
//   }

  

// "use client"
// import useSWR from 'swr';
// import fetcher from '@/lib/fetcher';
// import { NextResponse } from 'next/server';

// export const fetchFavourites = async () => {
//     const { data: favourites } = useSWR('/api/test', fetcher);
//     return NextResponse.json(favourites);
// };

