import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="lg:4/12 md:w-6/12 w-full md:p-3 sm:p-3 p-1 mb-5">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <Image
            src={"/images/project_default.jpg"}
            width={500}
            height={500}
            alt="IMAGE"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Project
            {/* <div className="badge badge-secondary">Web Application</div> */}
          </h2>
          <p>Web Application</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">HTML</div>
            <div className="badge badge-outline">CSS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
