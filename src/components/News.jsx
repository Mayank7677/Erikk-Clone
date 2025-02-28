import { motion } from "motion/react";
import { section } from "motion/react-client";
import React from "react";
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import data4 from "../data/data4";

const News = () => {
  return (
    <section className="px-6 py-2 md:px-16 mb-20">
      <div>
        <div className="overflow-hidden">
          <motion.img
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "anticipate",
            }}
            src="https://cdn.prod.website-files.com/63fd93c920392238faa118c4/640021599dc39238ac139db2_heading-news.svg"
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

      <div className="mt-15 grid grid-cols-1 gap-15 sm:grid-cols-2 lg:grid-cols-4">
        {data4.map((dets, i) => (
          <div key={i} className="flex flex-col  gap-4">
            <div>
              <img src={dets.image} alt="" />
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl md:text-3xl opacity-80 font-mono tracking-tight   uppercase">{dets.title}</h1>
              <p className="font-mono lg:text-lg tracking-tight opacity-60">{dets.description}</p>
            </div>

            <div className="flex gap-5 mt-4 items-center cursor-pointer">
              <BsArrowDownRightCircleFill className="text-4xl hover:rotate-360 duration-600" />
              <p className="uppercase tracking-wider text-sm font-mono">
                read more
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
