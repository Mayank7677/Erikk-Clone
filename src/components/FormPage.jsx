import React from "react";

const FormPage = () => {
  return (
    <section className="p-6 md:py-8 md:px-16">
      <div className="flex flex-col gap-10 lg:flex-row mb-20">
        <div className="lg:w-3/4">
          <img
            className="lg:h-[100%] object-cover cursor-pointer hover:opacity-80 duration-500"
            src="https://cdn.prod.website-files.com/63fd93c920392238faa118c4/6401964634cc11af60092df6_contact.webp"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-10 lg:gap-50 lg:w-[100%] lg:justify-between">
          <div>
            <p className="font-light uppercase text-xl">contact</p>
            <h1 className="uppercase text-5xl sm:text-6xl sm:font-normal lg:text-8xl font-light">
              Let’s create your brand
            </h1>
          </div>

          <div className="lg:mb-10">
            <form className="flex flex-col gap-7">
              <input
                className="p-5 w-full bg-gray-100 outline-none"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="p-5 w-full bg-gray-100 outline-none"
                type="text"
                placeholder="Your Email"
              />
              <textarea
                className="p-5 w-full bg-gray-100 outline-none"
                placeholder="Your Message"
              >
                {" "}
              </textarea>
              <button className="uppercase py-2 px-3 font-mono tracking-wider bg-black text-white rounded-4xl">
                send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormPage;
