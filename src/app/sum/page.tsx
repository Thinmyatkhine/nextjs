"use client"

import { useState } from "react"

export default function Sum(){
    const [first_value,set_first_value] = useState(0);
    const [second_value, set_second_value] = useState(0);
    return (
        <main className="w-screen h-screen flex justify-center">
            <div className="mt-[10rem] flex flex-col gap-5">
            <input
                className="bg-gray-50 shadow-lg border border-black/20 w-[300px] px-3 py-2 rounded"
                placeholder="First Value"
                onChange={ (event:any) => set_first_value(event.target.value) }
            />
            <input
                className="bg-gray-50 shadow-lg border border-black/20 w-[300px] px-3 py-2 rounded"
                placeholder="Second Value"
                onChange={ (event:any) => set_second_value(event.target.value)}
            />
            <h3><strong>Total: </strong> {+first_value + +second_value}</h3>
            </div>
        </main>
    )
}