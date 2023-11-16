import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Header = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const background = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["rgba(255, 255, 255, 0)", "rgba(69, 69, 69, 0.35)"]
  );

  return (
    // Target ref for whole window
    <div ref={targetRef} className="min-h-screen w-full fixed z-10">
      <div className="navbar ease-in-out duration-300 justify-center">
        <motion.div
          style={{ background }}
          className="rounded-full w-6/12 shadow-inner backdrop-blur-lg justify-center"
        >
          <ul className="menu menu-horizontal px-1 text-lg font-semibold">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Project</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
