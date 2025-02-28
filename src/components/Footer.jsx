import { motion, useInView } from 'motion/react';
import React, { useRef } from 'react'
import { CiTwitter } from 'react-icons/ci';
import { FaBehance, FaInstagram } from 'react-icons/fa';
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {

    const ref6 = useRef(null);
  const isInView6 = useInView(ref6, { triggerOnce: true, threshold: 0.1 });
  
  const ref7 = useRef(null);
  const isInView7 = useInView(ref7 , { triggerOnce: true, threshold:0.5 })
    
  return (
    <footer className="bg-black text-white w-full p-6 md:py-8 md:px-16 flex flex-col gap-20">
      <div className="pt-10 text-center justify-center items-center flex flex-col gap-7 lg:gap-10 ">
        <motion.h1
          ref={ref6}
          initial={{ opacity: 0, y: -200 }}
          animate={isInView6 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="uppercase text-5xl font-light tracking-tighter sm:text-8xl md:text-9xl xl:text-[16rem]"
        >
          let's create
        </motion.h1>
        <p className="uppercase text-4xl font-light md:text-6xl lg:text-7xl">
          Unleashing the Potential of Your Brand
        </p>
        <button className="bg-white text-black w-fit flex items-center gap-3 font-mono cursor-pointer overflow-hidden  px-5 py-2 rounded-2xl">
          <p className="uppercase">get in touch</p>
          <MdArrowOutward />
        </button>
      </div>

      <motion.div
        ref={ref7}
        initial={{ width: 0, }}
        animate={isInView7 ? { width: "100%", } : {}}
        transition={{ duration: 0.8 }}
        className="h-[0.1px] w-full bg-gray-300"
      ></motion.div>

      <div className="mt-15 grid gap-10 sm:grid-cols-2 sm:gap-y-20 lg:grid-cols-4 ">
        <div className="flex flex-col gap-10 cursor-pointer">
          <img
            className="text-white w-17"
            src="https://cdn.prod.website-files.com/63fd93c920392238faa118c4/63fec9ef49df0ba686eda62b_logo-inverse.svg"
            alt=""
          />

          <div className="flex flex-col gap-5 mt-auto">
            <div className="flex gap-4 items-center cursor-pointer">
              <FaInstagram className="text-4xl bg-white text-black rounded-full p-2" />
              <p className="uppercase">instagram</p>
            </div>

            <div className="flex gap-4 items-center cursor-pointer">
              <CiTwitter className="text-4xl bg-white text-black rounded-full p-2" />
              <p className="uppercase">twitter</p>
            </div>

            <div className="flex gap-4 items-center cursor-pointer">
              <FaBehance className="text-4xl bg-white text-black rounded-full p-2" />
              <p className="uppercase">behance</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <h1 className="uppercase text-xl font-mono">pages</h1>

          <ul className="flex flex-col gap-3  ">
            {["home", "services", "about", "jobs", "contact"].map((ele, i) => {
              return (
                <li key={i} className="relative group max-w-fit">
                  <p className="uppercase font-mono cursor-pointer">{ele}</p>
                  <span className="absolute w-0 bg-white h-[2px] transition-all duration-200 group-hover:w-full"></span>
                </li>
              );
            })}
          </ul>

          <button className="bg-white text-black w-fit flex items-center gap-3 font-mono cursor-pointer overflow-hidden  px-5 py-2 rounded-2xl">
            <p className="uppercase">more templates</p>
            <MdArrowOutward />
          </button>
        </div>

        <div className="flex flex-col gap-7">
          <h1 className="uppercase text-xl font-mono">sms</h1>

          <ul className="flex flex-col gap-3">
            {[
              "work",
              "work single",
              "news",
              "news single",
              "shop",
              "shop songle",
            ].map((ele, i) => {
              return (
                <li key={i} className="relative group max-w-fit">
                  <p className="uppercase font-mono cursor-pointer">{ele}</p>
                  <span className="absolute w-0 bg-white h-[2px] transition-all duration-200 group-hover:w-full"></span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-7">
          <h1 className="uppercase text-xl font-mono">utility pages</h1>

          <ul className="flex flex-col gap-3">
            {[
              "404 error page",
              "password protected",
              "styleguide",
              "licensing",
              "changelog",
            ].map((ele, i) => {
              return (
                <li key={i} className="relative group max-w-fit">
                  <p className="uppercase font-mono cursor-pointer">{ele}</p>
                  <span className="absolute w-0 bg-white h-[2px] transition-all duration-200 group-hover:w-full"></span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mt-25 relative group max-w-fit">
        <p className="font-mono  uppercase tracking-tighter cursor-pointer">
          mayank sapna panwar
          <span className="absolute left-0 bottom-0 bg-white w-0 h-[2px] transition-all duration-200 group-hover:w-full"></span>
        </p>
      </div>
    </footer>
  );
}

export default Footer
