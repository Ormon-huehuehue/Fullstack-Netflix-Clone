
export const fetchFavourites = async () => {
  console.log("fetchFavourites called")
    const response = await fetch('http://localhost:3000/api/favourites');
    if (!response.ok) {
      console.log('Failed to fetch favourites');
    }
    return response.json();
  }

  

// "use client"
// import useSWR from 'swr';
// import fetcher from '@/lib/fetcher';
// import { NextResponse } from 'next/server';

// export const fetchFavourites = async () => {
//     const { data: favourites } = useSWR('/api/test', fetcher);
//     return NextResponse.json(favourites);
// };

