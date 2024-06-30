"use server"

import {Video} from "@/models/videoModel";
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDb } from "@/lib/utils";
import { User } from "@/models/userModel";




export async function POST(request: Request){
    try{
        const { movieId } = await request.json();
        const session = await auth();
        const userEmail = session?.user?.email;
    
    // Function to add videos to favourites
        const video_id = movieId;
    
    //connect to database
        await connectDb();
        const existingMovie = await Video.findOne({_id: video_id});
    
        if(!existingMovie){
            return NextResponse.json({ error: 'Movie not found' });
        }
    
        const user = await User.findOne({email: userEmail});
        
        if(user){
            const isFavourite = user.favourites.some((fav)=> fav._id.toString() === existingMovie._id.toString());   
            if(!isFavourite){
                user.favourites.push(existingMovie);
                await user.save();
                console.log("Movie added to favourites");  
                return NextResponse.json(user);  
            }
            else{
                console.log("Movie already in favourites");
                return NextResponse.json({ error: 'Movie already in favourites' });
            }
    
            
        }
        else{
            console.log("User not found");
            res.status(404).json({ error: 'User not found' });  
        }
    
    }
    catch(error){
        console.error('Error adding to favourites:', error);
      res.status(500).json({ error: 'Server error' });
    }
}