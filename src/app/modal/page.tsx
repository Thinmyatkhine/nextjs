"use client";

import clsx from "clsx";
import { useState } from "react";

const transition_style = "transition-all duration-[0.5s] ease-in-out";

export default function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <main className="w-screen h-[200vh] flex flex-col justify-center items-center overflow-y-auto">
      {/* Modal */}
      <h3 className="font-bold text-2xl mt-[10rem]">Modal</h3>
      <div className="relative flex justify-center w-[50vw] h-[50vh] bg-red-400">
        <div
          className={clsx(
            "absolute top-0 w-[10rem] h-[5rem] bg-blue-100",
            transition_style,
            // open ? "mt-[20vh]" : "mt-[-100vh]"
            open ? "mt-[5rem]" : "mt-[-10rem]"
            // open ? "mr-[0rem]" : "mr-[-10rem]"
          )}
        ></div>
      </div>
      <button onClick={() => setOpen(true)}>Open</button>
      <button onClick={() => setOpen(false)}>Close</button>

      {/* Sidebar */}
      <h3 className="font-bold text-2xl mt-[15rem]">Sidebar</h3>
      <div className="relative flex justify-center w-[50vw] h-[50vh] bg-red-400">
        <div
          className={clsx(
            "absolute top-0 right-0 w-[10rem] h-[100%] bg-blue-100",
            transition_style,
            // open ? "mt-[20vh]" : "mt-[-100vh]"
            open ? "mr-[0rem]" : "mr-[-10rem]"
          )}
        >
        
        </div>
      </div>
      <button onClick={() => setOpen(true)}>Open</button>
      <button onClick={() => setOpen(false)}>Close</button>
    </main>
  );
}
