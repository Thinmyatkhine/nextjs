"use client"
import Image from "next/image";
import { useState } from "react";
const manga_data = [
    {
        image: "/images/Age-Matters-Webtoon.jpeg",
        title: "Age Matters",
       
    },
    {
        image: "/images/I-Love-Yoo-Webtoon.jpeg",
        title: "I Love Yoo"
       
    },
    {
        image: "/images/devil.webp",
        title: "Devil"
    },
    {
        image: "/images/Lets-Play.webp",
        title: "So I Married The Anti Fan"
    },
    {
        image: "/images/The-Remarried-Empress.jpeg",
        title: "The Remarried Empress"
    },
    {
        image: "/images/So-I-Married-the-Anti-fan-Webtoon.jpeg",
        title: "So I Marrie the Anti fan"
    }
]




export default function Manga() {
    const [select, set_select] = useState({
        image: "/images/Age-Matters-Webtoon.jpeg",
        title: "Age Matters"
    })
    const episode_style = "border border-black bg-slate-200 rounded mr-3 w-[100px] ml-3 text-center cursor-pointer"
    return (
    

        <main className="w-screen h-screen 
             bg-[url(/images/bg.jpg)] bg-contain z-1 flex justify-center">
<div className=" backdrop-blur-sm z-1">
<div className="flex flex-col items-center mt-10 width-[47%] rounded uppercase">

<h1 className=" text-shadow text-3xl font-bold text-black" > 
<Image src="/images/3.jpg" alt="pi" width={50} height={50} className="absolute left-[35%]"></Image>
Manga</h1>
                <div className="w-[100%] box-border mt-5">
                    <div className="grid grid-cols-3 gap-3 w-full">
                    {
                            manga_data.map(item => (
                                <div
                                    className="w-full overflow-hidden cursor-pointer flex justify-between"
                                    key={item.title}
                                    onClick={(event: any) => set_select(item)}
                                >
                                    <Image className="rounded" src={item.image} alt="Age_Matters" width={300} height={300} />
                                
                                </div>
                            ))
                        }

                    </div>
                    </div>

</div>
  
</div>

<div className="w-[47%]  h-full backdrop-blur-sm z-1 flex flex-col items-center justify-center">
                <div className="w-[17rem] rounded overflow-hidden" >
                    <Image src={select.image} alt="ts" width={600} height={600} />

                </div>
                <h3 className="font-bold w-full text-xl text-center"> {select.title}</h3>
               <div className="flex ">
                        <div className={episode_style}>
                            <h3 className="text-sm">Start Episode</h3>
                        </div>
                         <div className={episode_style}>
                         <h3 className="text-sm">Final Episode</h3>
                     </div>
                     </div>
            </div>

           
        </main>
    )
}