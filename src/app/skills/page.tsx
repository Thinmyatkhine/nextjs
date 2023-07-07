import Image from "next/image";

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
    return (
        <main className="w-screen h-screen flex flex-col  items-center">
            <h2 className="w-full font-bold text-2xl uppercase text-center mt-10"> skills</h2>
            <div className="w-[50%] box-border mt-5">
                <div className="grid grid-cols-3 gap-3 w-full ">

                    {/* {} => javascript function use */}
                    {
                        skill_data.map(item => (<div className="w-full overflow-hidden">
                            <Image src={item.image} alt="ts" width={600} height={600} />
                            <h3 className="font-bold w-full text-lg text-center">{item.title}</h3>
                        </div>))
                    }

                </div>
            </div>

        </main>
    )
}