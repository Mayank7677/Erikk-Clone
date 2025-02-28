import { motion } from "motion/react";
import React from "react";
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import data3 from "../data/data3";

const Work = () => {
  return (
    <section className="px-6 py-2 md:px-16 mb-15">
      <div>
        <div className="overflow-hidden">
          <motion.img
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "anticipate",
            }}
            src="https://cdn.prod.website-files.com/63fd93c920392238faa118c4/6400215913dd1bfd8aec864e_heading-work.svg"
            alt=""
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 mt-6">
          {["social media", "e-commerce", "campaigns", "branding"].map(
            (dets, i) => (
              <button
                key={i}
                className="px-4 py-2 opacity-80 border rounded-3xl uppercase font-mono tracking-wider"
              >
                {dets}
              </button>
            )
          )}
        </div>
      </div>

      <div className="mt-15 flex flex-col gap-10 divide-y divide-gray-400">
        {data3.map((dets, i) => (
          <div key={i} className="flex pb-8 flex-col group relative cursor-pointer gap-5 sm:gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className=" flex flex-col gap-4 sm:flex-row sm:items-center md:gap-10">
              <div className="sm:w-1/3 sm:max-w-[210px] lg:absolute lg:w-0 group-hover:w-full right-80 lg:max-w-[250px] transition-all duration-900">
                <img
                  src={dets.image}
                  alt=""
                />
              </div>

              <div className="flex flex-col gap-1 md:gap-3 ">
                        <h1 className="text-3xl  sm:text-5xl lg:text-7xl uppercase">{ dets.title }</h1>
                <p className="font-mono opacity-80 uppercase">
                  { dets.description }
                </p>
              </div>
            </div>

            <div className="flex gap-5 mt-4 items-center cursor-pointer">
              <BsArrowDownRightCircleFill className="text-4xl hover:rotate-360 duration-600" />
              <p className="uppercase tracking-wider text-sm font-mono">
                Discover
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
