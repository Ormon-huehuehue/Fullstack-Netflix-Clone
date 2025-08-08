import React from 'react';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import MyList from '@/components/client-side/MyList';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import getCurrentUser from '@/actions/getCurrentUser';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';



const Page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey:['currUser'],
    queryFn: getCurrentUser
  })

  const session = await auth();
  const userEmail = session?.user?.email;
  // if(!userEmail){
  //   redirect("/login")
  // }

  return (
        <HydrationBoundary state={dehydrate(queryClient)}>
    <div className="h-screen bg-black object-fill relative">
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>
      <div className="absolute top-0 left-0 w-full z-0">
        <Billboard />
          <MovieList Title="Trending now" />
          <MyList Title="My List" />
      </div>
    </div>
    </HydrationBoundary>
  );
};

export default Page;
