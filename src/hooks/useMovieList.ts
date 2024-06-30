import { connectDb } from "@/lib/utils";
import { Video } from "@/models/videoModel";

const useMovieList = async () => {
  // Function to fetch all the available movies

  await connectDb();

  try {
    const videos = await Video.find({}); // Fetch all documents from the videos collection
    console.log("Videos", videos);
    return videos; // Return all videos
  } catch (error) {
    console.error('Failed to fetch videos:', error);
    return [];
  }
};

export default useMovieList;