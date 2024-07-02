"use server"

import { connectDb } from "@/lib/utils";
import { Video } from "@/models/videoModel";
import { movieInterface } from "@/components/MovieList";

const getMovies = async () => {
  // Function to fetch all the available movies

  await connectDb();

  try {
    const videos = await Video.find({}); // Fetch all documents from the videos collection
    return videos as movieInterface[]; 
  } catch (error) {
    console.error('Failed to fetch videos:', error);
    return [];
  }
};

export default getMovies;