"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { VscChromeClose, VscMenu } from "react-icons/vsc";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineWhatsApp
} from "react-icons/ai";



const Navbar = (props) => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)

  const handleNav = () =>{
    setNav(prev =>!prev)
    console.log(nav)
  }
  
  useEffect(()=>{
    const handleShadow = () =>{
      if (window.scrollY > 90){
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener("scroll", handleShadow)
  }, [])

  return (
    <div className={shadow  ? "fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]" : "fixed w-full h-20 z-[100] bg-[#ecf0f3]"}>
      <div className="flex justify-between items-center w-full h-full px-2 xl:px-16">
      <a href="/" role="link" aria-label="go back home">
        <Image
          src={props.data.logo}
          alt="logo"
          width="140"
          height="80"
          className="drop-shadow-3xl"
        /></a>
        <div>
          <ul className="hidden md:flex">
           
              <li className="ml-10 text-sm uppercase hover:border-b"> <a href="/" role="link" aria-label="go to home">Home</a></li>
            
           
           
              <li className="ml-10 text-sm uppercase hover:border-b"> <a href="/#stack" role="link" aria-label="go to stack">Stack</a></li>
        
          
            <li className="ml-10 text-sm uppercase hover:border-b">  <a href="/#works" role="link" aria-label="go to works">Works</a></li>
          
           
              <li className="ml-10 text-sm uppercase hover:border-b">
              <a href="/#contact" role="link" aria-label="go to contact">Contact</a>
              </li>
           
            
              <li className="ml-10 text-sm uppercase text-[#22c4c7] hover:border-b"><a href={props.data.resume} target="_blank" role="link" aria-label="go to resume">
                Resume</a></li>
            

          </ul>
          <div onClick={handleNav} className="md:hidden">
            <VscMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
        <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" :  "fixed left-[-150%] top-0 p-10 ease-in duration-500"}>
          <div className="flex w-full items-center justify-between">
          <a href="/" role="link" aria-label="go back home">
          <Image
              src={props.data.logo}
              width="130"
              height="70"
              alt="logo"
              className="drop-shadow-3xl"
            /></a>
            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
              <VscChromeClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              Let´s build something awesome together
            </p>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              
                <li onClick={()=>setNav(false)} className="py-4 text-sm"><a href="/" role="link" aria-label="go to home">Home</a></li>
              
              
             
                <li onClick={()=> setNav(false)} className="py-4 text-sm"> <a href="/#stack" role="link" aria-label="go to stack">Stack</a></li>
             
             
                <li onClick={()=>setNav(false)} className="py-4 text-sm"> <a href="/#works" role="link" aria-label="go to works">Works</a></li>
              
             
                <li onClick={()=>setNav(false)} className="py-4 text-sm"> <a href="/#contact" role="link" aria-label="go to contact">Contact</a></li>
              
              
              <li onClick={()=>setNav(false)} className="py-4 text-sm text-[#22c4c7]"><a href={props.data.resume} target="_blank" role="link" aria-label="go to resume">
                Resume </a> </li>
           
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#22c4c7]">
                Let´s connect
              </p>
            </div>
            <div className="flex items-center justify-between w-full my-4 sm:w-[80%]"><a href={props.data.contact.linkedin} target="_blank" role="link" aria-label="go to linkedin">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineLinkedin />
              </div></a> <a href="mailto:andresdrimer@hotmail.com?subject=Hello Andres!" target="_blank" role="link" aria-label="send email">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div></a>
              <a href={props.data.contact.github} target="_blank" role="link" aria-label="go to github">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                {" "}
                <AiOutlineGithub />
              </div></a>  <a href="https://api.whatsapp.com/send?phone=5491164930517" target="_blank" role="link" aria-label="send whatsapp">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                {" "}
                <AiOutlineWhatsApp />
              </div></a>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
