import { auth } from "@/auth";
import { connectDb } from "@/lib/utils";
import { User } from "@/models/userModel";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params }: { params: { movieId: string } }) {
  try {
    const session = await auth();
    const userEmail = session?.user?.email;

    if (!userEmail) {
      return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
    }

    const { movieId } = params;
    console.log("DELETEMOVIE", movieId)

    await connectDb();

    const user = await User.findOne({ email: userEmail });
    if (user) {
      const movieIndex = user.favourites.findIndex(fav => fav == movieId);
      if (movieIndex > -1) {
        // Remove movie from favourites
        user.favourites.splice(movieIndex, 1);
        await user.save();
        console.log("Movie removed from favourites");
        return NextResponse.json({ message: 'Movie removed from favourites' }, { status: 200 });
      } else {
        console.log("Movie not found in favourites");
        return NextResponse.json({ error: 'Movie not found in favourites' }, { status: 404 });
      }
    } else {
      console.log("User not found");
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error removing from favourites:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
