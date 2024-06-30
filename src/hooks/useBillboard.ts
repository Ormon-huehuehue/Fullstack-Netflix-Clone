import { connectDb } from "@/lib/utils";
import { Video } from "@/models/videoModel";
import { NextApiResponse } from "next";

const useBillboard = async() => {
  // Function to fetch a random video URL

    await connectDb();

    try {
      
      // Use aggregation to get a random document
      const randomVideo = await Video.aggregate([
        { $sample: { size: 1 } } // $sample is used to randomly select documents
      ]);
      console.log("RandomVideo",randomVideo)
      // Check if a video was found
      if (randomVideo.length > 0) {
        return randomVideo[0]
      } else {
        return null; // No video found
      }
    } catch (error) {
      console.error('Failed to fetch random video URL:', error);
      return null;
    }
  };


export default useBillboard;