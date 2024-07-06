import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { Video } from "@/models/videoModel";
import { movieInterface } from "@/components/MovieList";
import { connectDb } from "@/lib/utils";


export  async function GET(req:Request, {params}: {params : {movieId:string}}){
    try{
        const session = await auth();
        
        const movieId = params.movieId as string

        console.log("movieId", movieId)

        connectDb();

        const movie = await Video.findOne({
            '_id' : movieId
        }) as movieInterface;

        console.log("movie", movie)

        if(!movie){
            console.log("Movie not found (movies api)");
            throw new Error("Movie not found")
        }


        return NextResponse.json(
            movie 
        );
    }
    catch(error){
        throw new Error("Internal server error(movies api)")
    }
}