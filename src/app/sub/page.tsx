"use client";
import { useState } from "react"
export default function sub(){
       const [first,setfirst] = useState(0);
       const [second,setsecond] = useState(0);
    return (
        <main className="w-screen h-screen flex justify-center ">
         <div className="mt-32 flex flex-col gap-10">
            <input type="number"  className="bg-grey-50 shadow border border-blue-500 w-[300px] px-3 py-2 rounded " placeholder="first" onChange={(event :any) => setfirst(event.target.value)}
            />

            <input type="number"  className="bg-grey-50 shadow border border-blue-500 w-[300px] px-3 py-2 rounded" placeholder="second" onChange={(event:any) => setsecond(event.target.value)}/>

            <h3><strong>Total: </strong>{first - second}</h3>
         </div>
        </main>
    )
}