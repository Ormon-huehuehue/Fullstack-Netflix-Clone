"use client"

import getMovies from "@/actions/getMovies";
import { useQuery } from "@tanstack/react-query";


export function useGetMovies(){
    return useQuery({
        queryKey: ['movies'],
        queryFn : async()=> getMovies()
    })
}