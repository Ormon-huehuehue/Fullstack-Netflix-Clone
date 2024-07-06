import { NextApiRequest } from "next";
import { auth } from "@/auth";
import { User } from "@/models/userModel";
import { connectDb } from "./utils";

const serverAuth = async()=>{
    const session = await auth();

    if(!session){
        throw new Error("Not signed in")
    }

    const userEmail = session?.user?.email;

    
    await connectDb();

    const currentUser = await User.findOne({email: userEmail});
    if(!currentUser){
        throw new Error("Not signed in");
    }

    return {currentUser};

    
}

export default serverAuth;