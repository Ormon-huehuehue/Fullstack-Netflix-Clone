import { connectDb } from "@/lib/utils";
import { Video } from "@/models/videoModel";
import { NextApiResponse } from "next";

const useBillboard = async() => {
  // Function to fetch the first video URL

    await connectDb();
    try {
      
      // Use aggregation to get the first document
      const firstVideo = await Video.aggregate([
        { $limit: 1 } // $limit is used to get the first document
      ]);
  
      // Check if a video was found
      if (firstVideo.length > 0) {
        return firstVideo[0]
      } else {
        return null; // No video found
      }
    } catch (error) {
      console.error('Failed to fetch first video URL:', error);
      return null;
    }
  };


export default useBillboard;