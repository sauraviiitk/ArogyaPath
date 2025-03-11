import React from "react";
import { Link } from "react-router-dom";

export const ProductItem = ({ title, description, image1Src, image1Link, image2Src, image2Link }) => {
  return (
    <div className="flex space-x-4">
      {/* First Image with Link */}
      <Link to={image1Link}>
        <img
          src={`/images/girish.jpeg`}  // Image 1
          width={140}
          height={70}
          alt={`${title} Image 1`}
          className="shrink-0 rounded-md shadow-2xl"
        />
      </Link>

   

      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">{title}</h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </div>
  );
};
