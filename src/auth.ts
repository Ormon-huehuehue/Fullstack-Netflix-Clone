import NextAuth,{AuthError, CredentialsSignin} from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"
import { connectDb } from "./lib/utils";
import {compare} from "bcryptjs";
import { User } from "./models/userModel";
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    CredentialProvider({
        name:"credentials",
        credentials:{
            email:{
                label:"Email",
                type:"email"
            },
            password:{
                label:"Password",
                type:"password"
            }
        },
        authorize: async (credentials)=>{
            const email = credentials.email as string | undefined;
            const password = credentials.password as string | undefined;

            if(!email || !password){
                throw new CredentialsSignin("Please provide both email and password");
            };


            //connection with database 
            await connectDb();

            const user = await User.findOne({email}).select("+password");
            
            if(!user) throw new CredentialsSignin("Invalid Email or password");

            if(!user.password)
                throw new CredentialsSignin("Please login with your Google account")
            
            const isPasswordCorrect = await compare(password, user.password);
            
            if(!isPasswordCorrect){
                throw new CredentialsSignin("Invalid password")
            }
            else{
                console.log("User logged in",user);
                return user;        
            }    
        },
    })
  ],
  pages:{
    signIn:"/login"
  },
  callbacks:{
    async signIn({ user, account}){
        if(account?.provider == "credentials"){
            return true;
        }
    },
    async redirect({url, baseUrl}){
        //redirect to homepage after login
        if(url == "/login"){
            return baseUrl;
        }
        //keep the default behavior for other cases
        return baseUrl;
    }   
  }
})