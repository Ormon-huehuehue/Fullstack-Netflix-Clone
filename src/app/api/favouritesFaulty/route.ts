"use server"

import { auth } from "@/auth";
import { connectDb } from "@/lib/utils";
import { User } from "@/models/userModel";
import { Video } from "@/models/videoModel";
import { NextApiRequest, NextApiResponse } from "next";
import { Elsie_Swash_Caps } from "next/font/google";

export default async function handler(req : NextApiRequest,res:NextApiResponse){



if(req.method = "GET"){
    try{
        console.log("get mothod ran on favouritesFaulty.ts")
        const session = await auth();
        const userEmail = session?.user?.email;
    
        await connectDb();
        const user = await User.findOne({email: userEmail});
    
        if(user){
            res.status(200).json(user.favourites);
        }
        else{
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch(error){
        console.error('Error fetching favourites:', error);
        res.status(500).json({ error: 'Server error' });
    }
        
    }
else if(req.method == "POST"){
    try{
            const session = await auth();
            const userEmail = session?.user?.email;
        
        // Function to add videos to favourites
            const video_id = req.body.id;
        
        //connect to database
            await connectDb();
            const existingMovie = await Video.findOne({id: video_id});
        
            if(!existingMovie){
                res.status(404).json({ error: 'Movie not found' });
                return;
            }
        
            const user = await User.findOne({email: userEmail});
            
            if(user){
                const isFavourite = user.favourites.includes(existingMovie._id);
                if(!isFavourite){
                    user.favourites.push(existingMovie);
                    await user.save();
                    console.log("Movie added to favourites");  
                    res.status(200).json(user);     
                }
                else{
                    console.log("Movie already in favourites");
                    res.status(400).json({ error: 'Movie already in favourites' });
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
    else if(req.method == "DELETE"){
        try{
            const session = await auth();
            const userEmail = session?.user?.email; 
        
        
            const video_id = req.body.id;
        
            await connectDb();
            
            const user = await User.findOne({email: userEmail});
            if(user){
                const movieIndex = user.favourites.findIndex(movie => movie._id === video_id);
        
                if(movieIndex > -1){
                    //remove movie from favourites
                    user.favourites.splice(movieIndex, 1);
                    await user.save(); 
                    console.log("Movie removed from favourites");
                }
                else{
                    console.log("Movie not found in favourites");
                }
            }
            else{
                console.log("User not found");
                return;
            }
        }
        catch(error){
            console.error('Error removing from favourites:', error);
            res.status(500).json({ error: 'Server error' });
        }
}

}
