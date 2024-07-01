"use client"

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MyList from '@/components/client-side/MyList';

const page = () => {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client = {queryClient}>
      <MyList Title = "Testing react Query"/>
    </QueryClientProvider>
  )
}

export default page