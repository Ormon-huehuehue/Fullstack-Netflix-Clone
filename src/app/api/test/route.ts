import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDb } from "@/lib/utils";
import { User } from "@/models/userModel";

export async function GET(){
    try{
        const session = await auth();
        const userEmail = session?.user?.email;
    
        await connectDb();
        const user = await User.findOne({email: userEmail});
        console.log(user.favourites[0]);
        if(user){
            return NextResponse.json({
                fav : user.favourites[1]
            });
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