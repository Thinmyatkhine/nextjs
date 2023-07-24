"use client"
import Image from "next/image";
import { useState } from "react";
const skill_data = [
    {
        image: "/images/ts.jpg",
        title: "Typescript"
    },
    {
        image: "/images/css.jpg",
        title: "Css"
    },
    {
        image: "/images/js.jpg",
        title: "Js"
    },
    {
        image: "/images/next.jpg",
        title: "next"
    },
    {
        image: "/images/react.jpg",
        title: "react"
    },
    {
        image: "/images/tw.jpg",
        title: "Tw"
    }
]

//react component 
export default function Home() {

    const [select, set_select] = useState({
        image: "/images/ts.jpg",
        title: "Typescript"
    })
    return (

        //  jsx ka react htel mhr yayyy tae html code twy ko call
        
        <main className="w-screen h-screen flex px-[10%] justify-between items-center">
            <div className="w-[47%] h-screen flex flex-col items-center">
                <h2 className="w-full font-bold text-2xl uppercase text-center mt-10"> skills</h2>
                <div className="w-[100%] box-border mt-5">
                    <div className="grid grid-cols-3 gap-3 w-full ">

                        {/* {} => javascript function use */}
                        {/* object array to string array */}
                        {/* {skill_data.map(item => (item.title))} */}
                        {/* object array to jsx array */}
                        {
                            skill_data.map(item => (
                                <div
                                    className="w-full overflow-hidden cursor-pointer "
                                    key={item.title}
                                    onClick={(event: any) => set_select(item)}
                                >
                                    <Image className="rounded" src={item.image} alt="ts" width={600} height={600} />
                                    <h3 className="font-bold w-full text-lg text-center">{item.title}</h3>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <div className="w-[47%] flex  flex-col items-center h-max ">
                <div className="w-[5rem] rounded overflow-hidden" >
                    <Image src={select.image} alt="ts" width={600} height={600} />

                </div>
                <h3 className="font-bold w-full text-lg text-center"> {select.title}</h3>
            </div>

        </main>
    )
}