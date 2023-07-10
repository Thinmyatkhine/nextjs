"use client";

import { useState } from "react";

export default function CreateFruit() {


    const [name, setName] = useState("Banana");
    const [total, setTotal] = useState(8);
    const [weight, setWeight] = useState(10);


  return (
    <main className="fixed flex justify-center items-center w-screen h-screen gap-24">
      <div className="w-[30rem]">
        <h3 className="font-bold text-2xl">Fruit</h3>
        <p className="text-md">
          <strong>Name:</strong> {name}
        </p>
        <p className="text-md">
          <strong>Weight:</strong> {weight}
        </p>
        <p className="text-md">
          <strong>Total:</strong> {total}
        </p>
      </div>
      <div className="w-max flex flex-col gap-5">
        <h3 className="font-bold text-2xl">Form</h3>
        <input
          className="bg-gray-50 w-[300px] border border-black/20 shadow px-3 py-2 rounded"
          placeholder="Name"
          onChange={(event:any) => setName(event.target.value)}
        />
        <input
          className="bg-gray-50 w-[300px] border border-black/20 shadow px-3 py-2 rounded"
          placeholder="Total"
          type="number"
          onChange={(event:any) => setTotal(event.target.value)}
        />
        <input
          className="bg-gray-50 w-[300px] border border-black/20 shadow px-3 py-2 rounded"
          placeholder="Weight"
          type="number"
          onChange={(event:any) => setWeight(event.target.value)}
        />
      </div>
    </main>
  );
}
