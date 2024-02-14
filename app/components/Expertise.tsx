import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Expertise = () => {
  const data = [
    {
      title: "React.js",
      text: "Proficient in React JS, I adeptly utilize its capabilities to engineer dynamic and user-centric websites. My portfolio exemplifies a versatile collection of projects, showcasing my prowess in delivering sophisticated online experiences.",
    },
    {
      title: "Next.js",
      text: "Skilled in Next.js, I design and develop cutting-edge web applications with optimal performance and intuitive user interfaces, showcasing my expertise in delivering exceptional digital solutions within my portfolio.",
    },
    {
      title: "HTML / CSS / JS",
      text: "I demonstrate mastery in HTML, CSS, and JavaScript, seamlessly blending these skills to craft visually stunning and functionally robust websites, reflecting my expertise in frontend development.",
    },
    {
      title: "UI / UX",
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
