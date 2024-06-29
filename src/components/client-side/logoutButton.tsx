"use client"
import { signOut } from 'next-auth/react'
import { Button } from '../ui/button'
import { useToast } from '../ui/use-toast'

const LogoutButton = () => {

    const {toast} = useToast();

  return (
    <div onClick = {()=> {
        signOut();
        toast({
            title:"Logged out successfully"
        })

    }}> Logout</div>

  )
}

export default LogoutButton