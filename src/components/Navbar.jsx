import { motion, useSpring } from "motion/react";
import React, { useEffect, useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { FaBehance } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();
  const [click, setClick] = useState("");


  useEffect(() => {
    if (click) {
      navigate(`/${click}`);
    }
  }, [click]);

  return (
    <motion.section
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="flex justify-between items-center px-6 py-4 md:py-8 md:px-16"
    >
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <img
          src="https://cdn.prod.website-files.com/63fd93c920392238faa118c4/63fec9eeb8692c4a95dd4ec0_logo.svg"
          alt=""
        />
      </div>

      <div className="flex gap-10 items-center">
        <ul className="flex gap-10 max-sm:hidden max-lg:gap-4">
          {["work", "services", "about", "news", "pages"].map((ele, i) => {
            return (
              <li
                onClick={(e) => setClick(ele)}
                key={i}
                className="relative group"
              >
                <p className="font-mono cursor-pointer uppercase">{ele}</p>
                <span className="absolute w-0 h-[1px] transition-all bg-black duration-200 group-hover:w-full"></span>
              </li>
            );
          })}
        </ul>

        <motion.button
          initial={{ x: 0, y: 0 }}
          whileHover={{
            scale: 1.05,
          }}
          className="bg-black font-mono cursor-pointer overflow-hidden  px-5 py-2 rounded-2xl max-sm:hidden"
        >
          <motion.span onClick={() => navigate('/form')} className="text-white">LET'S CREATE</motion.span>
        </motion.button>

        <RiMenu4Fill className="text-2xl sm:hidden" />
      </div>
    </motion.section>
  );
};

export default Navbar;
