"use client"
import { TbBrandNextjs } from 'react-icons/tb'
import { clsx } from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
const icon ={
    image:"/images/sidebar-icon.png",
    alt:"sb",
}

export default function nextus() {
    const color_cur = "cursor-pointer text-white";
    const [bar,setBar] = useState(false);
    const transition_style = "transition-all duration-[0.5s] ease-in-out";
    const li_style = 'w-full hover:bg-white hover:text-black cursor-pointer rounded px-5 py-3'
    const text_color = 'text-white ml-20 '
    const p_size = 'px-8 py-3 text-[20px] rounded'
    function handleClose() {
setBar(false);
}
    return (
        <main className=' '>
            <section className="w-screen h-screen  bg-blue-400 overflow-hidden">
                <div className="flex h-[50px] items-center ml-20 mt-4">
                    <div className='flex items-center'><TbBrandNextjs className='bg-blue-400 text-white text-[60px]' />
                    <h2 className='text-[25px] text-white font-sans font-bold w-[400px]'>Next-Kit <sup className="bg-pink-600 rounded text-[15px] w-[30px]">Free</sup> </h2>
                    
                    </div>
                    <div className=' flex items-center justify-evenly w-[650px]'>
                    <h1 className={clsx(color_cur)}>Custom Compoments</h1>
                    <h1 className={clsx('hover:text-blue-100',color_cur,)}>Basics Compoments</h1>
                    <button className ="bg-white text-black rounded px-3 py-4 text-sm hover:bg-black hover:text-white">Download Free</button>
                    </div>
                </div>
                <div className='absolute top-4 right-7 cursor-pointer hover:bg-white rounded-2xl'>
<Image src={icon.image} alt={icon.alt} width={50} height={50} onClick={()=>setBar(true)}></Image>

  

</div>  
<div className={clsx('bg-blue-300 absolute top-0 right-0 w-[10rem] h-[29rem] shadow-lg border-red-400 border border-solid rounded', 
transition_style,
bar ? "mr-[orem]" : "invisible"
)}>
    <div className='text-white mt-6 '>
        <button type='button' onClick={handleClose} className='right-0 top-0 absolute w-5 bg-red-300 hover:rounded hover:bg-white hover:text-black'>X</button>
        <h1 className='flex items-center gap-1 px-2'><TbBrandNextjs className='text-[50px]'/>NEXT-KIT</h1>
    <ul className='gap-1'>
        <li className={li_style}>Home</li>
        <li className={li_style}>About Me</li>
        <li className={li_style}>Work</li>
        <li className={li_style}>Service</li>
        <li className={li_style}>Freebies</li>
        <li className={li_style}>Hire Me</li>
    </ul>
    <footer className='relative top-16'>
        <pre className='text-[13px] hover:text-black cursor-pointer'> Feature   Version 3.2</pre>
    </footer>

</div>
</div>
               <div className='w-full flex'>
                <div className='w-[50%]'>
                <h1 className='text-white text-[40px] ml-20 mt-20 font-semibold'>Build Stunning Websites <br /> With NextJs UI Kit</h1>
                <p className={clsx(text_color,'text-[20px] mt-3')}>Free Reactstrap UI Kit with Lots of <br />Ready to Use Sections</p>
                <div className='flex items-center gap-4'>
                    <button type='button' className={clsx(' bg-red-500  hover:bg-red-400  mt-10',text_color,p_size)}>Download Free</button>
                <button type='button' className={clsx(p_size,'mt-10 border border-solid border-white text-white hover:bg-white hover:text-black')} >Upgrade To Pro</button>
                </div>
                </div>
                <div className='w-[50%]'>
                    <Image src='/images/banner-img.webp' alt='plt'width={500} height={300}></Image>
                </div>
                </div>   
               
            </section>
            <section className='w-screen h-screen'>
<h1 className='text-center'>Header/Navigation</h1>
<p className='text-center'>Here you can check Demos we created you can easily use it.Its quite easy to Create <br />your own dream website & dashboard in No-time.</p>
            </section>
        </main>
    )
} 