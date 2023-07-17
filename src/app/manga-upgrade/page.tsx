"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
const manga_data = [
  {
    image: "/images/Age-Matters-Webtoon.jpeg",
    title: "Age Matters",
  },
  {
    image: "/images/I-Love-Yoo-Webtoon.jpeg",
    title: "I Love Yoo",
  },
  {
    image: "/images/devil.webp",
    title: "Devil",
  },
  {
    image: "/images/Lets-Play.webp",
    title: "So I Married The Anti Fan",
  },
  {
    image: "/images/The-Remarried-Empress.jpeg",
    title: "The Remarried Empress",
  },
  {
    image: "/images/So-I-Married-the-Anti-fan-Webtoon.jpeg",
    title: "So I Marrie the Anti fan",
  },
];

export default function Manga() {
  const [select, set_select] = useState({
    image: "",
    title: "",
  });

  const gradient_style = "bg-gradient-to-r from-[#e39926] to-[#42b6e8]";
  const hover_gradient_style =
    "hover:bg-gradient-to-r hover:from-[#e04d0d] hover:to-[#4f1ed7]";
  const transition_style = "transition-all duration-[0.5s] ease-in-out"

  const episode_style =
    "border border-black rounded mr-3 w-[150px] ml-3 text-center font-bold cursor-pointer py-1 px-2 hover:text-white";

  function handleClose() {
    set_select({
      image:"",
      title: ""
    })
  }

  return (
    <main className="w-screen h-screen">
      <div className="fixed w-screen h-screen bg-[url(/images/bg.jpg)] bg-contain z-1 "></div>
      <div className="relative w-screen h-screen flex justify-center items-center z-2">
        <div className=" z-1 w-[47%]">
          <div className="flex flex-col items-center mt-10 w-full rounded uppercase">
            <div
              className={clsx(
                "flex items-center gap-5 px-5 rounded",
                gradient_style
              )}
            >
              <h1
                className={clsx(
                  " text-shadow text-3xl font-bold text-white drop-shadow-lg"
                )}
              >
                Manga
              </h1>
              <Image
                src="/images/3-removebg.png"
                alt="pi"
                width={50}
                height={50}
                className="animate-bounce"
              ></Image>
            </div>
            <div className="w-[100%] box-border mt-5">
              <div className="grid grid-cols-3 gap-3 w-full">
                {manga_data.map((item) => (
                  <div
                    className="w-full overflow-hidden cursor-pointer flex justify-between"
                    key={item.title}
                    onClick={(event: any) => set_select(item)}
                  >
                    <Image
                      className="object-cover overflow-hidden object-center w-full aspect-square rounded"
                      src={item.image}
                      alt="Age_Matters"
                      width={300}
                      height={300}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={clsx(
          "absolute top-0 w-max  h-max z-1 flex flex-col items-center justify-center bg-white border-2 border-black shadow-lg px-5 py-5 rounded",
          transition_style,
          select.image ? "mt-[20vh]" : "mt-[-100vh] ",
        )}>
          <div className="relative w-full">
            <button type="button" className="absolute top-[-0.5rem] right-0 w-[20px] h-[20px] flex justify-center items-center bg-zinc-100 rounded-full border border-black" onClick={handleClose}>X</button>
          </div>
          <div className="w-[17rem] rounded overflow-hidden bg-black">
            <Image
              src={select.image}
              className="object-cover overflow-hidden object-center w-[17rem] h-[17rem] roudned"
              alt="ts"
              width={600}
              height={600}
            />
          </div>
          <h3 className="font-bold w-full text-xl text-center py-5">
            {" "}
            {select.title}
          </h3>
          <div className="flex ">
            <div
              className={clsx(
                episode_style,
                gradient_style,
                hover_gradient_style
              )}
            >
              <h3 className="text-sm">Start Episode</h3>
            </div>
            <div
              className={clsx(
                episode_style,
                gradient_style,
                hover_gradient_style
              )}
            >
              <h3 className="text-sm">Final Episode</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
