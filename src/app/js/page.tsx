import Image  from "next/image";

const js_obj = {
    image: "/images/js.jpg",
    alt: "js",
title: "Javascript",
skill: ["firstplace","secondplace","thirdplace"],
detail: "For styling js",
}

export default function(){
    return(
        <main className="w-screen h-screen flex justify-center items-center">
            <div className="w-max flex gap-6 items-center ">
<div className="w-[7rem]">
 <Image src={js_obj.image} alt= {js_obj.alt} width={600} height={600}/>
</div>
<div>
    <h2 className="font-bold text-lg">{js_obj.title}</h2>
    <div className="flex gap-2">
        {js_obj.skill.map(item =>(<div className="w-[25px] h-[12px] bg-yellow-300 rounded animate-spin"></div> ))}
    </div>
    <p>{js_obj.detail}</p>
</div>

            </div>

        </main>
    )
}