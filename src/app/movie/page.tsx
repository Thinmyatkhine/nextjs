


import { log } from "console";
import Image from "next/image";
//const use in array, object
const movie_data = ["archemy", "aouad", "squid", "wednesday", "Bp","Hp"]
//let use in string, number , boolean
let str = "shchsv";

//react component 
export default function Home() {
    function playing_with_Array(){
        const number = [1,3,5,7,9];
        console.log({number});
        const after_map = number.map(item => item+1);
        console.log({after_map});
        const transform_num = number.map(item => "this is "+item);
        console.log({transform_num});
    }
    playing_with_Array();
    console.log("hello 1");
    return (
        <main className="w-screen h-screen flex flex-col  items-center">
            <h2 className="w-full font-bold text-2xl uppercase text-center mt-10"> Movies</h2>
            <div className="w-[50%] box-border mt-5">
                <div className="gap-3 w-full flex flex-col items-center ">

                    {/* {} => javascript function use */}
                    {
                        movie_data.map(item => (
                        <div className=" bg-white shadow rounded px-3 py-1 overflow-hidden">
                            <h5 className=" w-max">{item}</h5>
                        </div>
                        ))
                    }

                </div>
            </div>

        </main>
    )
}