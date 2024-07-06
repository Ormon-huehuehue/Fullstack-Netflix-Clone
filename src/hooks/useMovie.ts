"use client"

import useSWR from 'swr';
import fetcher from "@/lib/fetcher";

const useMovie = (movieId:string)=>{
    const {data,error, isLoading}  = useSWR(`/api/movies/${movieId}`,  fetcher,{
        revalidateIfStale :false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false
    })


    return {
        data,error, isLoading
    }

}



export default useMovie

