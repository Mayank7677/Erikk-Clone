import React, { useRef } from 'react'
import { BsArrowDownRightCircleFill } from 'react-icons/bs';
import data2 from '../data/data2';
import { motion, useInView } from 'motion/react';
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { div } from "motion/react-client";
import { FaInstagram } from "react-icons/fa";

const TeamSection = () => {
     const ref5 = useRef(null);
     const isInView5 = useInView(ref5, { triggerOnce: true, threshold: 0.5 });
  return (
    <>
      <section className="mt-10">
        <div className="grid lg:grid-cols-2 gap-6 ">
          <motion.h1
            ref={ref5}
            initial={{ opacity: 0, x: -200 }}
            animate={isInView5 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl"
          >
            TEAM
          </motion.h1>
          <p className="font-mono text-lg lg:mt-3 lg:text-xl">
            We have assembled a team of talented and experienced professionals
            who are dedicated to helping you achieve your brand's full
            potential.
          </p>
        </div>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {data2.map((dets, i) => {
            return (
              <div key={i} className="flex flex-col gap-5">
                <h1 className="uppercase text-3xl cursor-pointer">
                  {dets.name}
                </h1>

                <div>
                  <img
                    className="cursor-pointer hover:opacity-80 duration-500"
                    src={dets.image}
                    alt=""
                  />
                </div>

                <div className="flex justify-between items-center">
                  <p className="font-mono uppercase text-md">{dets.role}</p>
                  <div className="flex gap-3">
                    <FaInstagram className="cursor-pointer hover:scale-105 duration-500" />
                    <FiTwitter className="cursor-pointer hover:scale-105 duration-500" />
                    <CiLinkedin className="cursor-pointer hover:scale-105 duration-500" />
                  </div>
                </div>

                <p className="font-mono opacity-70">{dets.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="flex flex-col lg:flex-row  gap-10 w-[100%] pb-20">
        <div className="hidden lg:block w-[50%]"></div>
        <div className="mt-20 flex flex-col gap-5 border-t pt-10 border-gray-400">
          <p className="uppercase font-mono">join the team</p>
          <h1 className="text-5xl font-light lg:font-normal uppercase">
            Want to shape the future of branding?
          </h1>
          <div className="flex items-center gap-5 mt-4">
            <BsArrowDownRightCircleFill className="text-4xl hover:rotate-360 duration-600 cursor-pointer" />
            <p className="uppercase tracking-wider text-sm font-mono cursor-pointer">
              find job
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamSection
