import Image from "next/image";
import { BsFillBalloonHeartFill } from 'react-icons/bs'
const next_obj = {
    img: "/images/next.jpg",
    alt: "next",
    title: "Next Js",
    skill: ["first", "sec", "third", "fourth"],
    detail: "styling next",
}

export default function () {
    return (
        <main className="w-screen h-screen flex justify-center items-center">
            <div className="flex gap-8 items-center">
                <div className="w-[8rem]">
                    <Image src={next_obj.img} alt={next_obj.alt} width={600} height={600}></Image>
                </div>
                <div>
                    <h1 className="font-bold text-lg">{next_obj.title}</h1>
                    <div className="gap-2 flex animate-bounce" >
                        {next_obj.skill.map(item => (<div className="w-[25px] h-[12px] bg-black rounded"></div>))}
                    </div>
                    <p className="flex">{next_obj.detail}<BsFillBalloonHeartFill /></p>
                </div>
            </div>
        </main>
    )
}