import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link cursor-pointer"
      onClick={onClick}
    >
      <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-64 mob:h-48 tablet:h-56 laptop:h-80">
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-105 transition-all ease-out duration-300"
          src={img}
        />
      </div>
      <h1 className="mt-3 text-xl tablet:text-2xl font-medium">
        {name || "Project Name"}
      </h1>
      <h2 className="text-lg tablet:text-xl opacity-70">
        {description || "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
