"use client"
 import {useState} from "react"
export default function divide(){
   const [numOne,setnumOne] = useState(0);
   const [numTwo,setnumTwo] = useState(0);
    return(
        <main className="w-screen h-screen flex justify-center">
            <div className="mt-[10rem] flex flex-col gap-7">
                <input className="bg-purple-200 shadow-lg border border-purple-400 w-[300px] px-3 py-2 rounded"
                placeholder="numOne"
                onChange={ (event:any) => setnumOne(event.target.value)}/>
                 <input className="bg-purple-200 shadow-lg border border-purple-400 w-[300px] px-3 py-2 rounded"
                placeholder="numTwo"
                onChange={(event:any) =>setnumTwo(event.target.value)}/>

                <h3><strong>Total:</strong>{numOne / numTwo}</h3>
            </div>
        </main>
    )
}