"use client"
import Image from "next/image";
import {useState} from 'react';

const skill_data = ["/images/css.jpg","/images/css.jpg","/images/css.jpg","/images/css.jpg","/images/css.jpg","/images/css.jpg"]


export default function home() {
        const [color,setColor] = useState("brown");
        const changeColor = () => {
            const newColor = color == "brown"? "purple" : "brown";
            setColor(newColor);
        }

    return(
        // <main className="flex justify-center items-center w-screen h-screen max-w-[unset]">
        //     <div className="flex flex-col items-center gap-5">
        //         <h2 className="font-bold text-xl  " style={{color:color}}>Ohaiyo!</h2>
        //         <button className="bg-pink-300 px-5 rounded py-1 hover:bg-pink-600 hover:text-white uppercase font-bold text-sm " onClick={changeColor}>Clicku</button>
        //     </div>
        // </main>
        <main className="w-screen h-screen flex flex-col  items-center">
            <h2 className="font-bold text-2xl w-full uppercase text-center mt-10">Skills</h2>
            <div className="w-[50%] box-border mt-5">
                <div className="grid grid-cols-3 gap-3 w-full">
                  
                  {
                    skill_data.map(item => (<div className="w-full overflow-hidden ">
                      <Image src={item} alt="ts" width={600} height={600}  />
                    </div>))
                  }
                </div>
                
            </div>
        </main>
    )

}








