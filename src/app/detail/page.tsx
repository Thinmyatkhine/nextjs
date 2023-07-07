import Image from "next/image";

const skill_obj = {
    img: "/images/ts.jpg",
    alt: "ts",
    title: "TypeScript",
    skill:["firstYear", "secondYear", "thirdYear"],
    detail: "Mostly use with react.js"
}
export default function home() {
    return (
        <main className="h-screen w-screen flex justify-center items-center">
            <div className="flex w-max gap-5 items-center">
                <div className="w-[7rem] overflow-hidden">
                    <Image src={skill_obj.img} alt={skill_obj.alt} width={600} height={600} />
                </div>
                <div className="flex flex-col gap-2 h-max">
                    <h2 className="font-bold text-lg"> {skill_obj.title}</h2>
                    <div className="flex gap-2">
                        {
                            skill_obj.skill.map(item => (<div className="h-[12px] w-[25px] rounded bg-sky-600"></div>))
                        }
                    </div>
                    <p>{skill_obj.detail}</p>
                </div>
            </div>
        </main>
    )
}