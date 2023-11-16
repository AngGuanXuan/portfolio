import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const background = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["rgba(255, 255, 255, 0)", "rgba(64, 64, 64, 0.35)"]
  );

  function goSection() {
    window.addEventListener(
      "hashchange",
      () => window.history.pushState({}, "", "/"),
      {}
    );
  }

  return (
    // Target ref for whole window
    <div ref={targetRef} className="min-h-screen w-full absolute">
      <div className="navbar ease-in-out duration-300 md:justify-center justify-end fixed z-10">
        <motion.div
          style={{ background }}
          className="rounded-full lg:w-6/12 md:w-8/12 mt-5 shadow-inner bg backdrop-blur-lg justify-center"
        >
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost md:hidden p-5 h-full">
              <FontAwesomeIcon icon={faBars} size="2x" />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-[0] p-2 shadow text-lg font-semibold bg-slate-800 backdrop-blur-lg rounded-box w-40"
            >
              <li>
                <a onClick={goSection} href="#main">
                  Home
                </a>
              </li>
              <li>
                <a onClick={goSection} href="#project">
                  Projects
                </a>
              </li>
              <li>
                <a onClick={goSection} href="#expertise">
                  Expertise
                </a>
              </li>
              <li>
                <a onClick={goSection} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <ul className="md:flex hidden menu menu-horizontal px-1 text-lg font-semibold justify-center">
            <li>
              <a onClick={goSection} href="#main">
                Home
              </a>
            </li>
            <li>
              <a onClick={goSection} href="#project">
                Projects
              </a>
            </li>
            <li>
              <a onClick={goSection} href="#expertise">
                {" "}
                Expertise
              </a>
            </li>
            <li>
              <a onClick={goSection} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
