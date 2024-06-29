import NextAuth,{AuthError, CredentialsSignin} from "next-auth"
import GitHub from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"
import { connectDb } from "./lib/utils";
import {compare} from "bcryptjs";
import { User } from "./models/userModel";
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret : process.env.GOOGLE_CLIENT_SECRET
    }),
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
            const email = credentials.email as string;
            const password = credentials.password as string;

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
        if(account?.provider == "google"){
            try{
                const {email, name, id } = user;
                
                await connectDb();

                const userAlreadyExists = await User.findOne({email});
                if(!userAlreadyExists){
                    await User.create({email,name, googleId : id, image : user.image});
                }
                return true;
            }
            catch(error){
                console.error("Error in google callback",error);
                return false;
            }
        }
        if(account?.provider == "credentials"){
            return true;
        }
        return false;

    },
    async redirect({url, baseUrl}){
        //redirect to homepage after login
        if(url == "/login"){
            return baseUrl;
        }
        //keep the default behavior for other cases
        return url;
    }   
  }
})