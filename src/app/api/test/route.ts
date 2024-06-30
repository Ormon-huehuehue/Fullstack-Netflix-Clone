import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDb } from "@/lib/utils";
import { User } from "@/models/userModel";

export async function GET(){
    try{
        console.log("get mothod ran on favourites.ts")
        const session = await auth();
        const userEmail = session?.user?.email;
    
        await connectDb();
        const user = await User.findOne({email: userEmail});
    
        if(user){
            return NextResponse.json(user.favourites);
        }
        else{
            return NextResponse.json({
                error:"user not found"
            });
        }
    }
    catch(error){
        console.error('Error fetching favourites:', error);
        return NextResponse.json({
            error:"server error"
        });
    }
}