import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <section className="py-32">
      <div className="text-center flex flex-col gap-4 items-center">
        <p
          className="text-primary"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="400"
          data-sal-easing="ease"
        >
          Where Fashion meets Authenticity
        </p>
        <h1
          className="text-7xl font-medium uppercase"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="500"
          data-sal-easing="ease"
        >
          Sathhela International
        </h1>
        <p
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="500"
          data-sal-easing="ease"
        >
          Let's step into enhance your lifestyle like a royalty
        </p>
        <button
          className="bg-primary text-white py-2 px-4 w-44"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="600"
          data-sal-easing="ease"
        >
          Read More
        </button>
      </div>
      <div className="grid grid-cols-3 gap-7 px-40 mt-16">
        <div
          className="text-center flex flex-col items-center shadow-md px-8 py-10"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="700"
          data-sal-easing="ease"
        >
          <StaticImage src="../../images/fabric.png" width={50} />
          <span className="text-lg font-medium mt-5">We Design Fabric</span>
          <p className="text-textHint">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
            metus vel odio pellentesque pellentesque
          </p>
        </div>
        <div
          className="text-center flex flex-col items-center shadow-md px-8 py-10"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="800"
          data-sal-easing="ease"
        >
          <StaticImage src="../../images/machine.png" width={50} />
          <span className="text-lg font-medium mt-5">
            We have the Good Stuff
          </span>
          <p className="text-textHint">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
            metus vel odio pellentesque pellentesque
          </p>
        </div>
        <div
          className="text-center flex flex-col items-center shadow-md px-8 py-10"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="900"
          data-sal-easing="ease"
        >
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
