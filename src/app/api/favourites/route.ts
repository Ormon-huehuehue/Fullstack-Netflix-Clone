"use server"

import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDb } from "@/lib/utils";
import { User } from "@/models/userModel";


export async function GET(){
    try{
        console.log("get mothod ran on favourites API")
        const session = await auth();
        const userEmail = session?.user?.email;
    
        await connectDb();
        const user = await User.findOne({email: userEmail});
        console.log("current route running")

        if(user){
            return NextResponse.json(user.favourites);
        }
        else{
            return NextResponse.json("user not found")
        }
    }
    catch(error){
        console.error('Error fetching favourites:', error);
        return NextResponse.json({
            error:"server error"
        });
    }
}