"use client"

import { useToast } from "@/components/ui/use-toast"

import React from 'react'

const ErrorToast = () => {
    const {toast} = useToast();

  return (
    <>{
    toast({
        title:"Error",
        description:"Something went wrong"
    })}
    </>
  )
}

export default ErrorToast