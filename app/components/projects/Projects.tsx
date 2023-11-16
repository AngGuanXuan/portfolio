import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const data = [
    {
      image: "/images/projects/ekko_img.png",
      title: "EKKO.my",
      description: "Find your Product Within Seconds.",
      link: "https://ekko.my/",
    },
    {
      image: "/images/projects/kolorize_img.png",
      title: "Kolorize",
      description: "Relive your Nostalgia with Kolorize.",
      link: "https://kolorize.trigontech.my/",
    },
    {
      image: "/images/projects/sharkbyte_img.png",
      title: "Sharkbyte",
      description: "Create A Stunning Website in Minutes!",
      link: "https://trigontech.my/sharkbyte/",
    },
  ];

  return (
    <>
      {data.map((projects) => (
        <>
          <div className="lg:w-4/12 md:w-6/12 w-full md:p-3 sm:p-3 p-1 mb-5">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <Image
                  src={projects.image}
                  width={500}
                  height={500}
                  alt="IMAGE"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{projects.title}</h2>
                <p>{projects.description}</p>
                <Link
                  href={projects.link}
                  target="_blank"
                  className="btn btn-outline btn-info mt-5"
                >
                  Explore Now!
                </Link>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Projects;
