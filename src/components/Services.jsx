import { motion } from "motion/react";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import data5 from "../data/data5";
import { div } from "motion/react-client";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="p-6 md:py-8 md:px-16 -mt-5 w-[100%]">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {["branding", "campaigns", "e-commerce", "social media"].map(
          (dets, i) => (
            <a href={`#${dets}`} className="duration-500">
              <button
                key={i}
                className="px-4 cursor-pointer py-2 w-full opacity-80 border rounded-3xl uppercase font-mono tracking-wider"
              >
                {dets}
              </button>
            </a>
          )
        )}
      </div>

      <div className="flex flex-col sm:gap-10 md:gap-30 mb-20 sm:mb-30">
        {data5.map((dets, i) => (
          <div key={i} id={dets.id} className="flex flex-col gap-8">
            <div className="overflow-hidden mt-15">
              <motion.img
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "anticipate",
                }}
                src={dets.section}
                alt=""
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
              <div>
                <img
                  className="h-full object-cover cursor-pointer hover:opacity-80 duration-500"
                  src={dets.image}
                  alt=""
                />
              </div>

              <div className="p-4 lg:p-10 bg-black text-white flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl xl:text-5xl tracking-tight   uppercase">
                    {dets.cta.text}
                  </h1>
                  <p className="font-mono tracking-tight opacity-60 lg:text-lg">
                    {dets.cta.description}
                  </p>
                </div>

                <button className="bg-white text-black w-fit flex items-center gap-3 font-mono cursor-pointer overflow-hidden  px-5 py-2 rounded-4xl">
                  <p className="uppercase">get in touch</p>
                  <MdArrowOutward />
                </button>
              </div>
            </div>

            <div className="w-[100%] flex">
              <div className="flex gap-5 lg:gap-60">
                <div>
                  <p
                    className="font-mono mt-2 uppercase"
                    style={{ writingMode: "vertical-lr" }}
                  >
                    {dets.side}
                  </p>
                </div>

                <div className="flex flex-col gap-10 lg:gap-16">
                  <div>
                    <h1 className="text-[2.3rem] sm:text-5xl lg:text-6xl xl:text-7xl sm:font-normal max-sm:leading-10 font-light tracking-wide uppercase">
                      {dets.title}
                    </h1>
                  </div>

                  <div className="flex flex-col gap-10 lg:gap-14">
                    {dets.description.map((val, i) => {
                      return (
                        <div key={i}>
                          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 border-gray-300 border-b pb-10">
                            <p className="font-mono mt-2 uppercase lg:w-[100%]">
                              {val.heading}
                            </p>
                            <p className="font-mono opacity-50">
                              {val.content}
                            </p>
                          </div>
                        </div>
                      );
                    })}

                    {/* <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
                      <p className="font-mono mt-2 uppercase lg:w-[100%]">
                        brand strategy
                      </p>
                      <p className="font-mono opacity-50">
                        Developing a comprehensive brand strategy is essential
                        to establishing a strong and consistent brand identity.
                        We help you identify your brand values, target audience,
                        and unique selling proposition to create a compelling
                        brand story that resonates with your customers.
                      </p>
                    </div>

                    <span className="h-[0.5px] w-full bg-gray-600"></span>

                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
                      <p className="font-mono mt-2 uppercase lg:w-[100%]">
                        brand strategy
                      </p>
                      <p className="font-mono opacity-50">
                        Developing a comprehensive brand strategy is essential
                        to establishing a strong and consistent brand identity.
                        We help you identify your brand values, target audience,
                        and unique selling proposition to create a compelling
                        brand story that resonates with your customers.
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Hidden div  */}
              <div className="hidden lg:block lg:w-[100%]"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
