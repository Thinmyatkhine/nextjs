"use client";
import {useState} from "react"

export default function multi(){
    const [firstNum,set_firstNum] = useState(0);
    const [secondNum,set_secondNum] = useState(0);


    return(
        <main className="w-screen h-screen flex justify-center">
            <div className="flex flex-col gap-5 mt-[10rem]">
             <input className="bg-gray-100 shadow-lg border border-blue/50 w-[300px] px-3 py-2 rounded" 
             placeholder="firstNum"
             onChange={ (event:any) => set_firstNum(event.target.value)}/>
              <input className="bg-gray-100 shadow-lg border border-blue/50 w-[300px] px-3 py-2 rounded" 
             placeholder="secondNum"
             onChange={ (event:any) => set_secondNum(event.target.value)}/>
             <h3><strong>Total:</strong>{firstNum * secondNum}</h3>
            </div>
        </main>
    )
}