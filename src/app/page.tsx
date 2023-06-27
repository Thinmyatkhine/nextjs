"use client"
import Image from 'next/image'
import { useState } from 'react'
import { FaFacebook,FaGithubAlt,FaLinkedin } from 'react-icons/fa'


export default function Home() {
    //   const [color, setColor] = useState("black");

    //   const changeColor = () => {
    //     const newColor = color == "black" ? "blue" : "black";
    //     setColor(newColor);
    //   }
    //   return (
    //     <main className="flex items-center justify-center w-screen h-screen max-w-[unset]">
    //      <div className='flex flex-col items-center gap-5'>
    //         <h2 className='font-bold text-xl' style={{color:color}}>Thin Myat Khine</h2>
    //         <button className='bg-blue-500 px-5 py-2 rounded hover:bg-blue-600 text-white uppercase font-bold text-sm' onClick={changeColor}>Change Color</button>
    //      </div>

    //     </main>
    //   )
    const sectionStyle = 'w-full min-h-screen bg-blue-500 text-white flex flex-col items-center justify-center '
    const linkIconStyles = "text-5xl hover:text-blue-500 cursor-pointer"
    return (<main className='w-full min-h-screen'>
        <section className='w-full min-h-screen flex justify-center items-center'>
            <div className='w-max h-max flex gap-5 items-center'>
                <div className='w-[5rem] h-[5rem] bg-slate-600 rounded-full '></div>
                <div className='flex flex-col gap-2 '>
                    <h3 className='font-bold text-lg text-black'>Hnin Thet Khine</h3>
                    <h5 className='font-bold text-sm'>React Developer</h5>
                </div>
            </div>
        </section>
        <section className={sectionStyle}>
            <h3 className='font-bold text-2xl mb-5'>About Us</h3>
            <p className='w-[50%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis sit sapiente commodi quo quia voluptatum perspiciatis quaerat! Quod possimus cumque harum iusto quasi, fuga est doloremque itaque totam ratione repellendus sint ad quae hic iure illum praesentium ab sed voluptatem quisquam. Quod voluptate autem facilis aperiam at, eveniet deleniti possimus.</p>
        </section>
        <section className='w-full min-h-screen flex justify-center items-center flex-col gap-5'>
            <h3 className='font-bold text-2xl'>Find.....</h3>
            <ul className='w-max h-max flex gap-5 '>
                <li className={ linkIconStyles}> <FaFacebook/></li>
                <li className={ linkIconStyles}>< FaGithubAlt/></li>
                <li className={ linkIconStyles}> <FaLinkedin/></li>
               
               

            </ul>
       
        </section>
    </main>)


}



