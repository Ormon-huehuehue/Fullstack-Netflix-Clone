import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import mongoose from "mongoose"
import { User } from "@/models/userModel"

import { cache } from 'react'
 
export const getUser = cache(async (email: string) => {
  const currUser = await User.findOne({email})
  return currUser
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const connectDb = async()=>{
  try{
    const {connection} =  await mongoose.connect(process.env.MONGOOSE_URL as string,
      {
        dbName : "Catflix"
      }
    )
    console.log("Connected to database : ", connection.host)
  }
  catch(error){
    throw new Error("Error connecting to database");
  }
}