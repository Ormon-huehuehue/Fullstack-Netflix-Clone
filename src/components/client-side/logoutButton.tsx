"use client"
import { signOut } from 'next-auth/react'
import { Button } from '../ui/button'
import { useToast } from '../ui/use-toast'

const LogoutButton = () => {

    const {toast} = useToast();

  return (
    <Button onClick = {()=> {
        signOut();
        toast({
            title:"Logged out successfully"
        })

    }}> Logout</Button>

  )
}

export default LogoutButton