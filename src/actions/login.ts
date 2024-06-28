"use server";

import { signIn } from "@/auth";
import { CredentialsSignin } from "next-auth";


const loginHandler= async (email:string, password:string)=>{
    
    try{
        await signIn("credentials", {
            email,
            password,
            redirect: false
        });       
    }
    catch(error){
        const err = error as CredentialsSignin;
        console.log("error from loginHandler",err);
        return err.message;
    }
}



export {loginHandler}