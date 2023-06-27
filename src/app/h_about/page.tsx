"use client"

import {FaYoutube,FaLinkedinIn,FaGithub} from 'react-icons/fa'





export default function home() {


    const linkIconStyles = "text-5xl hover:text-purple-800 cursor-pointer"
     const sectionStyle ="w-full min-h-screen flex flex-col justify-center items-center bg-purple-600 text-white"

    return(<main className='w-full min-h-screen'>
            <section className="flex w-full min-h-screen justify-center items-center">
                <div className="w-max h-max flex gap-5 items-center">
                    <div className="w-[5rem] h-[5rem] rounded-full bg-purple-600"></div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-lg text-black">Hnin Thet Hmue</h2>
                        <h5 className="font-bold text-sm">React developer</h5>
                    </div>
                </div>
             </section>
             <section className={sectionStyle}>
                <h3 className="font-bold text-2xl mb-5">About us</h3>
                <p className="w-[50%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet adipisci autem eos magnam perspiciatis tempora qui alias, quae quisquam tenetur ipsa at voluptate incidunt voluptatibus inventore odio eaque laudantium? Itaque at iste aperiam, aliquam, perspiciatis non dolorum enim magnam eaque, incidunt animi quas reprehenderit quia praesentium sapiente veritatis earum voluptatum?</p>
            </section>
            <section className="w-full min-h-screen flex flex-col justify-center items-center gap-5">
                <h3 className='font-bold text-2xl'>Find me on ...</h3>
                <ul className='flex gap-5 w-max h-max'>
                     <li className={ linkIconStyles}><FaYoutube/></li>
                     <li className={ linkIconStyles}><FaLinkedinIn/></li>
                     <li className={ linkIconStyles}><FaGithub/></li>
                </ul>
            </section> 
          
        </main>)
}