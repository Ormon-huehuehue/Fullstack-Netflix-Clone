"use server"

import {Video} from "@/models/videoModel";
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDb } from "@/lib/utils";
import { User } from "@/models/userModel";




export async function POST(request: Request){
    try{
        const  movie  = await request.json();
        const session = await auth();
        const userEmail = session?.user?.email;
    
    // Function to add videos to favourites
        const video_id = movie._id;
    
    //connect to database
        await connectDb();
        const user = await User.findOne({email: userEmail});
        
        if(user){
            const isFavourite = user.favourites.some((fav:Record<string,any> )=> fav._id.toString() === video_id.toString());   

            console.log("addFavourite api user checked")
            console.log("Movie to be pushed : ", movie)
            if(!isFavourite){
                const movieJson = JSON.stringify(movie);
                const movieObject = JSON.parse(movieJson);
                user.favourites.push(movieObject.movie);
                await user.save();
                console.log("Movie added to favourites");  
                return NextResponse.json(user);  
            }
            else{
                console.log("Movie already in favourites");
                return NextResponse.json({ error: 'Movie already in favourites' });
            }
    
            
        }
    }
    catch(error){
        console.error('Error adding to favourites:', error);
        return NextResponse.json({ error: 'Error in addFavourite api' });
    }
}