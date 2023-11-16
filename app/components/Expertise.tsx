import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Expertise = () => {
  return (
    <div className="mb-5">
      <h3 className="text-2xl font-semibold flex">
        <FontAwesomeIcon
          className="mr-3"
          icon={faCode}
          style={{ width: "20px", color: "#a4a4a4" }}
        />{" "}
        UI/UX
      </h3>
      <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat
        volutpat dui sit amet posuere. In lobortis lobortis magna, eget.
      </p>
    </div>
  );
};

export default Expertise;
