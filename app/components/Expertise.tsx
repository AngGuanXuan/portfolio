import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Expertise = () => {
  const data = [
    {
      title: "HTML",
      text: "Proficient in HTML, I adeptly utilize its capabilities to engineer dynamic and user-centric websites. My portfolio exemplifies a versatile collection of projects, showcasing my prowess in delivering sophisticated online experiences.",
    },
    {
      title: "CSS",
      text: "Mastering the art of CSS, I skillfully elevate web aesthetics and functionality. Explore my portfolio for a showcase of seamlessly styled and visually stunning websites. CSS is my tool for design excellence.",
    },
    {
      title: "JS",
      text: "Commanding expertise in JavaScript, I orchestrate dynamic and interactive web solutions. Explore my portfolio to witness the fusion of creativity and functionality through innovative JavaScript-powered applications and interfaces.",
    },
    {
      title: "UI/UX",
      text: "As a UI/UX specialist, I meticulously design seamless and intuitive digital experiences. My portfolio reflects a commitment to user-centric design, showcasing projects that blend aesthetic elegance with optimal functionality.",
    },
  ];

  return (
    <>
      {data.map((expertise) => (
        <>
          <div className="md:w-6/12 w-full md:p-3 sm:p-3 p-1 mb-5">
            <h3 className="text-2xl font-semibold flex">
              <FontAwesomeIcon
                className="mr-3"
                icon={faCode}
                style={{ width: "20px", color: "#a4a4a4" }}
              />
              {expertise.title}
            </h3>
            <p className="mt-4">{expertise.text}</p>
          </div>
        </>
      ))}
    </>
  );
};

export default Expertise;
