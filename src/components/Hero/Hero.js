import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <section className="py-32">
      <div className="text-center flex flex-col gap-4 items-center">
        <p className="text-primary">Where Fashion meets Authenticity</p>
        <h1 className="text-7xl font-medium">Sathhela International</h1>
        <p>Let's step into enhance your lifestyle like a royalty</p>
        <button className="bg-primary text-white py-2 px-4 w-44">
          Read More
        </button>
      </div>
      <div className="grid grid-cols-3 gap-7 px-40 mt-16">
        <div className="text-center flex flex-col items-center shadow-md px-8 py-10">
          <StaticImage src="../../images/fabric.png" width={50} />
          <span className="text-lg font-medium mt-5">We Design Fabric</span>
          <p className="text-textHint">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
            metus vel odio pellentesque pellentesque
          </p>
        </div>
        <div className="text-center flex flex-col items-center shadow-md px-8 py-10">
          <StaticImage src="../../images/machine.png" width={50} />
          <span className="text-lg font-medium mt-5">We Design Fabric</span>
          <p className="text-textHint">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
            metus vel odio pellentesque pellentesque
          </p>
        </div>
        <div className="text-center flex flex-col items-center shadow-md px-8 py-10">
          <StaticImage src="../../images/export.png" width={50} />
          <span className="text-lg font-medium mt-5">We Design Fabric</span>
          <p className="text-textHint">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
            metus vel odio pellentesque pellentesque
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
