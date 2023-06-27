import Image from "next/image";
const skill_obj ={
    image : "/images/css.jpg",
    alt : "css" ,
    title: "CSS" ,
    skill: ["firstClass","SecondClass"] ,
    detail: "For styling the website"
}

export default function() {
    return (
        <main className="w-screen h-screen flex justify-center items-center">
            <div className="w-max flex gap-5 items-center">
                <div className="w-[7rem] ">
                    <Image src={skill_obj.image} alt = {skill_obj.alt} width ={600} height={600} />
                </div>
                <div>
                    <h2 className="font-bold text-lg">{skill_obj.title}</h2>
                    <div className="flex gap-2 ">
                    {skill_obj.skill.map(item => (  <div className="w-[25px] h-[12px] bg-indigo-600 rounded animate-bounce"></div>))}
                    </div>
                   
                  
                    <p>{skill_obj.detail}</p>
                </div>
                
            </div>
        </main>
    )
}