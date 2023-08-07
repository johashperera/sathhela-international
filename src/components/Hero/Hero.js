import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <section className="md:py-14 lg:py-20 xl:py-32">
      <div className="text-center flex flex-col gap-4 items-center">
        <p className="text-primary">Where Fashion meets Authenticity</p>
        <h1 className="md:text-3xl lg:text-5xl xl:text-7xl font-medium uppercase">
          Sathhela International
        </h1>
        <p>Let's step into enhance your lifestyle like a royalty</p>
        <button className="bg-primary text-white py-2 px-4 w-44">
          Read More
        </button>
      </div>
      <div className="grid grid-cols-3 gap-7 md:px-8 lg:px-14 xl:px-40 mt-16">
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
          <span className="text-lg font-medium mt-5">
            We have the Good Stuff
          </span>
          <p className="text-textHint">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
            metus vel odio pellentesque pellentesque
          </p>
        </div>
        <div className="text-center flex flex-col items-center shadow-md px-8 py-10">
          <StaticImage src="../../images/export.png" width={50} />
          <span className="text-lg font-medium mt-5">Always Genuine</span>
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
