import { section } from "motion/react-client";
import React from "react";
import TeamSection from "./TeamSection";
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import data6 from "../data/data6";
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <section className="px-6 py-2 md:px-16 mb-20">
      <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-20">
        <div className="lg:w-3/4 h-[100%] w-full">
          <img
            className="w-full h-full cursor-pointer hover:opacity-80 duration-500"
            src="https://cdn.prod.website-files.com/63fd93c920392238faa118c4/644101b6e3f8a161125f81d1_about-hero.webp"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-between gap-10">
          <div>
            <div>
              <img
                src="https://cdn.prod.website-files.com/63fd93c920392238faa118c4/640021598a1590827e0099c1_heading-erikk.svg"
                alt=""
              />
            </div>
            <h1 className="text-5xl font-light md:font-normal md:text-6xl uppercase mt-4">
              How We Help Luxury Brands Stand Out
            </h1>
          </div>

          <div className="flex gap-5  items-center cursor-pointer mt-auto pb-15">
            <BsArrowDownRightCircleFill className="text-4xl hover:rotate-360 duration-600" />
            <p className="uppercase tracking-wider text-sm md:text-lg font-mono">
              Our story
            </p>
          </div>
        </div>
      </div>

      <div className="w-full grid gap-15 sm:grid-cols-2 lg:grid-cols-4  lg:mt-25">
        <div className="w-full flex flex-col gap-5">
          <h1 className="uppercase tracking-wider text-xl">clients</h1>
          <div className="h-[0.5px] w-full bg-gray-400"></div>
          <h1 className="text-5xl tracking-tighter ">150 +</h1>
        </div>

        <div className="w-full flex flex-col gap-5">
          <h1 className="uppercase tracking-wider text-xl">projects</h1>
          <div className="h-[0.5px] w-full bg-gray-400"></div>
          <h1 className="text-5xl tracking-tighter">300 +</h1>
        </div>

        <div className="w-full flex flex-col gap-5">
          <h1 className="uppercase tracking-wider text-xl">happy clients</h1>
          <div className="h-[0.5px] w-full bg-gray-400"></div>
          <h1 className="text-5xl tracking-tighter">100 %</h1>
        </div>

        <div className="w-full flex flex-col gap-5">
          <h1 className="uppercase tracking-wider text-xl">followers</h1>
          <div className="h-[0.5px] w-full bg-gray-400"></div>
          <h1 className="text-5xl tracking-tighter">250K</h1>
        </div>
      </div>

      <div className="mt-30">
        <div>
          <img
            src="https://cdn.prod.website-files.com/63fd93c920392238faa118c4/64002159f166bc6ff545d5a7_heading-vision.svg"
            alt=""
          />
        </div>

        <div className="mt-10 lg:flex relative overflow-visible  lg:flex-row-reverse lg:gap-14 border-b pb-25 border-gray-400 mb-25">
          <div className="flex flex-col gap-10 sm:gap-14">
            <div className="lg:flex gap-10">
              <div>
                <img
                  className="cursor-pointer hover:opacity-80 duration-500"
                  src="https://cdn.prod.website-files.com/63fd93c920392238faa118c4/6401964634cc11af60092df6_contact.webp"
                  alt=""
                />
              </div>

              <div className="lg:self-end lg:pb-5">
                <h1 className="text-4xl sm:font-normal font-light md:text-6xl lg:text-3xl uppercase mt-4">
                  Putting Our Clients' Success First
                </h1>
                <p className="font-mono text-lg mt-3 lg:mt-3 lg:text-xl opacity-70">
                  We prioritize our clients' success by understanding their
                  goals and delivering tailored solutions that drive real growth
                  for their business.
                </p>
              </div>
            </div>

            {/* list part */}
            <div className="flex flex-col gap-10 divide-y divide-gray-400">
              {data6.map((dets, i) => (
                <div key={i} className="pb-8 lg:flex justify-between">
                  <div className="sm:flex gap-10">
                    <h1 className="text-4xl lg:text-2xl xl:text-3xl max-lg:font-light uppercase ">
                      {dets.id}
                    </h1>
                    <h1 className="text-4xl lg:text-2xl xl:text-3xl max-lg:font-light  uppercase">
                      {dets.title}
                    </h1>
                  </div>

                  <div className="sm:flex gap-18 lg:w-1/2">
                    <div></div>
                    <div>
                      <p className="font-mono text-lg mt-3 lg:mt-3 opacity-70">
                        {dets.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* sticky part  */}
          <div className="lg:w-1/4 xl:w-[70%] lg:sticky h-fit lg:top-10 overflow-visible">
            <div className="p-4 lg:p-7 bg-black text-white flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl lg:text-3xl tracking-tight   uppercase">
                  Unleashing your brands’ potential
                </h1>
                <p className="font-mono tracking-tight opacity-60 lg:text-lg">
                  We help unlock your brand's potential through strategic
                  branding, creative campaigns, and digital solutions.
                </p>
              </div>

              <button className="bg-white text-black w-fit flex items-center gap-3 font-mono cursor-pointer overflow-hidden  px-4 py-2 rounded-4xl">
                <p className="uppercase">get in touch</p>
                <MdArrowOutward />
              </button>
            </div>
          </div>
        </div>
      </div>

      <TeamSection />
    </section>
  );
};

export default About;
