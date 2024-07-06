"use client"

const error =({error, reset} : {error: Error, reset:()=>void})=>{
    return(
     <div className = "flex-col justify-center items-center bg-zinc-800 text-white font-montserrat font-semibold"> 
        <h1>ERROR</h1>
        <button onClick = {reset}> Try again</button>
    </div>
    )
}