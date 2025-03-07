import { motion, useInView } from 'motion/react';
import React, { useRef } from 'react'

import { BsArrowDownRightCircleFill } from "react-icons/bs";


import data from '../data/data';
import data2 from '../data/data2';
import TeamSection from './TeamSection';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  let navigate = useNavigate()




    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.5 });

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { triggerOnce: true, threshold: 0.5 });

    const ref3 = useRef(null);
    const isInView3 = useInView(ref3, { triggerOnce: true, threshold: 0.5 });

    const ref4 = useRef(null);
    const isInView4 = useInView(ref4, { triggerOnce: true, threshold: 0.5 });

   

    const ref7 = useRef(null);
    const isInView7 = useInView(ref7, { triggerOnce: true, threshold: 0.5 });




  return (
    <main className="p-6 md:py-8 md:px-16">
      <section className="mt- flex flex-col gap-3">
        <div className="overflow-hidden">
          <motion.img
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "anticipate",
            }}
            src="https://cdn.prod.website-files.com/63fd93c920392238faa118c4/63fed275667d13010afac1ac_heading-fashionwerk.svg"
            alt=""
          />
        </div>

        <div className="flex justify-between">
          <p className="font-mono uppercase font-light opacity-70">
            Branding Agency
          </p>
          <p className="font-mono uppercase font-light opacity-70">
            From Berlin
          </p>
        </div>
      </section>

      <section className="mt-7 lg:mt-12 flex flex-col gap-8 lg:flex-row-reverse lg:gap-20">
        <div className="lg:w-[50%] lg:h-[50rem]">
          <img
            className="h-[100%] lg:object-cover hover:opacity-80 cursor-pointer duration-800 "
            src="https://cdn.prod.website-files.com/63fd93c920392238faa118c4/63fed72aa75a04d4f083eb4a_home-hero.webp"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-5 lg:w-[50%]">
          <motion.h1
            ref={ref7}
            initial={{ opacity: 0, x: -200 }}
            animate={isInView7 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-normal text-4xl uppercase md:text-6xl lg:text-8xl lg:tracking-tight"
          >
            Unleash­ing Your Brand’s Potential
          </motion.h1>
          <p className="font-mono opacity-80 text-lg md:text-xl lg:text-2xl">
            Comprehensive branding solutions that help fashion, lifestyle, and
            luxury brands connect with their target audience.
          </p>

          <div className="mt-10 flex flex-col gap-5 lg:mt-auto lg:pb-5">
            <div className="flex justify-between border-b pb-3 border-gray-400">
              <p className="uppercase text-2xl opacity-90 lg:text-4xl">01</p>
              <p className="uppercase text-2xl opacity-90 lg:text-4xl">
                Branding
              </p>
            </div>

            <div className="flex justify-between border-b pb-3 border-gray-400">
              <p className="uppercase text-2xl opacity-90 lg:text-4xl">02</p>
              <p className="uppercase text-2xl opacity-90 lg:text-4xl">
                Campaigns
              </p>
            </div>

            <div className="flex justify-between border-b pb-3 border-gray-400">
              <p className="uppercase text-2xl opacity-90 lg:text-4xl">03</p>
              <p className="uppercase text-2xl opacity-90 lg:text-4xl">
                e-commerce
              </p>
            </div>

            <div className="flex justify-between">
              <p className="uppercase text-2xl opacity-90 lg:text-4xl">04</p>
              <p className="uppercase text-2xl opacity-90 lg:text-4xl">
                social media
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 lg:mt-25 flex flex-col gap-10 lg:flex-row lg:gap-15">
        <div>
          <img
            className="hover:opacity-80 cursor-pointer duration-800 "
            src="https://cdn.prod.website-files.com/63fd93c920392238faa118c4/63ff0189107c3469a831cb0a_home-about.webp"
            alt=""
          />
        </div>

        <div className="flex gap-5 lg:flex-row-reverse lg:gap-10">
          <p className="font-mono mt-2" style={{ writingMode: "vertical-lr" }}>
            What we do
          </p>

          <div className="flex flex-col gap-6 ">
            <motion.h1
              ref={ref2}
              initial={{ opacity: 0, y: 200 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="font-normal overflow-hidden h-fit text-4xl uppercase sm:text-6xl xl:text-8xl"
            >
              Tailored Brand Solu­tions
            </motion.h1>
            <p className="font-mono overflow-hidden bg-white z-30 opacity-80 text-lg md:text-xl lg:mt-auto lg:mb-10 ">
              We believe that every brand has a unique story to tell and our
              mission is to help you bring that story to life through
              exceptional branding, marketing, e-commerce, and social media
              strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 flex flex-col gap-10 lg:flex-row lg:gap-20 overflow-hidden bg-white z-10">
        <div className="flex flex-col gap-10 lg:mt-15">
          <motion.h1
            ref={ref}
            initial={{ opacity: 0, y: 200 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-9xl lg:font- overflow-hidden"
          >
            OUR SERVICES
          </motion.h1>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-15 overflow-hidden z-10 bg-white">
            <div className="flex flex-col gap-4 border-t-2 pt-5 border-gray-300">
              <h1 className="text-2xl">BRANDING</h1>
              <p className="font-mono opacity-70">
                Establish a strong brand identity that sets you apart.luxury
                brands connect .
              </p>
              <div
                onClick={() => navigate("/services")}
                className="flex gap-5 mt-4 items-center cursor-pointer"
              >
                <BsArrowDownRightCircleFill className="text-4xl hover:rotate-360 duration-600" />
                <p className="uppercase tracking-wider text-sm font-mono">
                  About Branding
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t-2 pt-5 border-gray-300">
              <h1 className="text-2xl">CAMPAIGNS</h1>
              <p className="font-mono opacity-70">
                Utilize data and analytics to optimize your marketing
                performance.
              </p>
              <div
                onClick={() => navigate("/services")}
                className="flex gap-5 mt-4 items-center cursor-pointer"
              >
                <BsArrowDownRightCircleFill className="text-4xl hover:rotate-360 duration-600" />
                <p className="uppercase tracking-wider text-sm font-mono">
                  About Campaigns
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t-2 pt-5 border-gray-300">
              <h1 className="text-2xl">E-COMMERCE</h1>
              <p className="font-mono opacity-70">
                Develop customized online stores that reflect your brand and
                vision.
              </p>
              <div
                onClick={() => navigate("/services")}
                className="flex gap-5 mt-4 items-center cursor-pointer"
              >
                <BsArrowDownRightCircleFill className="text-4xl hover:rotate-360 duration-600" />
                <p className="uppercase tracking-wider text-sm font-mono">
                  About E-commerce
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t-2 pt-5 border-gray-300">
              <h1 className="text-2xl">SOCIAL MEDIA</h1>
              <p className="font-mono opacity-70">
                Create engaging and shareable content that drives brand
                awareness.
              </p>
              <div
                onClick={() => navigate("/services")}
                className="flex gap-5 mt-4 items-center cursor-pointer"
              >
                <BsArrowDownRightCircleFill className="text-4xl hover:rotate-360 duration-600" />
                <p className="uppercase tracking-wider text-sm font-mono">
                  About social media
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:h-[50rem] lg:w-full">
          <img
            className="lg:h-full lg:object-cover hover:opacity-80 cursor-pointer duration-800"
            src="https://cdn.prod.website-files.com/63fd93c920392238faa118c4/63ff013040f8ceac6b7f98d1_home-services.webp"
            alt=""
          />
        </div>
      </section>

      <hr className="mt-10 lg:mt-30 text-gray-400 overflow-hidden bg-white z-10" />

      <section className="mt-5">
        <motion.h1
          ref={ref3}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-7xl md:text-8xl z-0 xl:text-[10rem] overflow-hidden text-center lg:tracking-wider uppercase"
        >
          selected work
        </motion.h1>

        <div className="mt-10 md:mt-14 flex flex-col gap-10 overflow-hidden bg-white z-90">
          <div className="flex flex-col gap-10 sm:flex-row ">
            <div className="lg:w-[100%]">
              <img
                className="hover:opacity-80 cursor-pointer duration-800 hover:scale-99"
                src="https://cdn.prod.website-files.com/63fd93c920392276d2a118ed/6401a5abcc00dd606d1af379_work-01-thumb-01.webp"
                alt=""
              />
            </div>
            <div className="lg:w-[100%] max-lg:hidden hover:opacity-80 hover:scale-99 cursor-pointer duration-800">
              <img
                src="https://cdn.prod.website-files.com/63fd93c920392276d2a118ed/6401a5adcb82400906ca21b1_work-01-thumb-02.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4 lg:w-[100%] sm:mt-4 sm:p-3 lg:pl-5">
              <h1 className="text-4xl sm:text-5xl md:text-7xl uppercase">
                azure
              </h1>
              <p className="font-mono text-lg opacity-80">
                Website Redesign: Improving user experience and modernizing
                design.
              </p>

              <div className="flex gap-4 mt-4 items-center sm:pb-5 sm:mt-auto cursor-pointer">
                <BsArrowDownRightCircleFill className="text-4xl hover:rotate-360 duration-600" />
                <p className="uppercase tracking-wider text-sm font-mono">
                  discover
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-10 sm:flex-row ">
            <div className="flex flex-col gap-4 lg:w-[92%] sm:mt-5 sm:p-3 lg:pl">
              <h1 className="text-4xl sm:text-5xl md:text-7xl uppercase">
                sage
              </h1>
              <p className="font-mono text-lg opacity-80">
                Social Media Campaign: Building brand awareness and engagement.
              </p>

              <div className="flex gap-4 mt-4 items-center sm:pb-5 sm:mt-auto cursor-pointer">
                <BsArrowDownRightCircleFill className="text-4xl hover:rotate-360 duration-600" />
                <p className="uppercase tracking-wider text-sm font-mono">
                  discover
                </p>
              </div>
            </div>
            <div className="lg:w-[100%] max-lg:hidden hover:opacity-80 hover:scale-99 cursor-pointer duration-800">
              <img
                src="https://cdn.prod.website-files.com/63fd93c920392276d2a118ed/6401aab9b421f8fa45424d65_work-02-thumb-02.webp"
                alt=""
              />
            </div>
            <div className="lg:w-[100%] hover:opacity-80 hover:scale-99 cursor-pointer duration-800">
              <img
                src="https://cdn.prod.website-files.com/63fd93c920392276d2a118ed/6401aab738e8cf1ec2616298_work-02-thumb-01.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 lg:mt-20 flex flex-col lg:flex-row  gap-10 w-[100%]">
        <div className="hidden lg:block w-[50%]"></div>

        <div className="flex flex-col gap-10 w-full">
          <div className="w-[100%] overflow-hidden">
            <motion.h1
              ref={ref4}
              initial={{ opacity: 0, x: 200 }}
              animate={isInView4 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="uppercase w-full overflow-hidden text-7xl sm:text-[6rem] lg:text-8xl text-end max-sm:text-center"
            >
              clients
            </motion.h1>
          </div>

          <div className="flex flex-col gap-7">
            {data.map((dets, i) => {
              return (
                <div
                  key={i}
                  className={`flex flex-col md:items-center md:flex-row md:justify-between gap-3 border-b pb-4 border-gray-400 ${
                    i === 5 && "border-none"
                  }`}
                >
                  <div className="md:flex md:items-center md:gap-20">
                    <p className="font-mono">{dets.year}</p>
                    <h1 className="text-4xl uppercase">{dets.name}</h1>
                  </div>
                  <p className="uppercase text-sm tracking-wider font-mono">
                    {dets.category}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="mt-10 lg:mt-30 text-gray-400 overflow-hidden bg-white z-10" />

      <TeamSection />
    </main>
  );
}

export default Home
