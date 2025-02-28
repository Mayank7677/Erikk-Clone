import { motion } from "motion/react";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Services = () => {
  return (
    <section className="p-6 md:py-8 md:px-16">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 mt-6">
        {["branding", "campaigns", "e-commerce", "social media"].map(
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

      <div className="flex flex-col gap-8">
        <div className="overflow-hidden mt-15">
          <motion.img
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "anticipate",
            }}
            src="https://cdn.prod.website-files.com/63fd93c920392238faa118c4/63ff0237a62f52200e33e983_heading-branding.svg"
            alt=""
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
          <div>
            <img className="h-full object-cover"
              src="https://cdn.prod.website-files.com/63fd93c920392238faa118c4/6400238e1247f2ac0b017246_services-01.webp"
              alt=""
            />
          </div>

          <div className="p-5 lg:p-10 bg-black text-white flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl xl:text-5xl tracking-tight   uppercase">
                Ready to stand out?
              </h1>
              <p className="font-mono tracking-tight opacity-60 lg:text-lg">
                Let's create a unique and memorable brand that stands out in a
                crowded marketplace.
              </p>
            </div>

            <button className="bg-white text-black w-fit flex items-center gap-3 font-mono cursor-pointer overflow-hidden  px-5 py-2 rounded-4xl">
              <p className="uppercase">get in touch</p>
              <MdArrowOutward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
