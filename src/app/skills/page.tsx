import Image from "next/image";

const skill_data = ["/images/ts.jpg", "/images/css.jpg", "/images/js.jpg", "/images/next.jpg", "/images/react.jpg","/images/tw.jpg"]

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
                            <Image src={item} alt="ts" width={600} height={600} />
                        </div>))
                    }

                </div>
            </div>

        </main>
    )
}