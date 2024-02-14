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
      image: "/images/projects/trigon_img.png",
      title: "Trigon tech",
      description: "Trigon Tech Sdn Bhd Company Website.",
      link: "https://trigontech.my/",
    },
    {
      image: "/images/projects/sharkbyte_img.png",
      title: "Sharkbyte",
      description: "Create A Stunning Website in Minutes!",
      link: "https://trigontech.my/sharkbyte/",
    },
    {
      image: "/images/projects/sp-technic_img.png",
      title: "Sp Technic",
      description: "SP Technic Company Website.",
      link: "https://sp-technic.com/",
    },
    {
      image: "/images/projects/sapuraomv_img.png",
      title: "Sapura OMV",
      description: "Sapura OMV Company Website.",
      link: "https://u2j.6bf.myftpupload.com/",
    },
  ];

  return (
    <>
      {data.map((projects) => (
        <>
          <div className="lg:w-4/12 md:w-6/12 w-full md:p-3 sm:p-3 p-1 mb-5">
            <Link
              href={projects.link}
              target="_blank"
              className="card bg-base-100 shadow-xl"
            >
              <figure className="flex">
                <Image
                  src={projects.image}
                  width={620}
                  height={500}
                  alt="IMAGE"
                  className="object-cover transition ease-in-out duration-300 hover:scale-110"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{projects.title}</h2>
                <p>{projects.description}</p>
                <span className="btn btn-outline btn-info mt-5">
                  Explore Now!
                </span>
              </div>
            </Link>
          </div>
        </>
      ))}
    </>
  );
};

export default Projects;
