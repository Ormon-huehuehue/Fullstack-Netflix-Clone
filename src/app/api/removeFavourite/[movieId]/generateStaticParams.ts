import { connectDb } from "@/lib/utils";
import { Video } from "@/models/videoModel";

export async function generateStaticParams() {
  try {
    await connectDb();

    // Fetch all movies
    const movies = await Video.find({}); 

    // Map over the movies to create the params array
    const params = movies.map((movie) => ({
      params: {
        movieId: movie._id.toString(),
      },
    }));

    return params;
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
