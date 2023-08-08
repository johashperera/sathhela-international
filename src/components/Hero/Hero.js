import React, { forwardRef } from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-10 md:py-14 lg:py-20 xl:py-32">
      <div className="text-center flex flex-col gap-4 items-center">
        <p className="text-primary">Where Fashion meets Authenticity</p>
        <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-medium uppercase">
          Sathhela International
        </h1>
        <p className="text-sm sm:text-base">
          Let's step into enhance your lifestyle like a royalty
        </p>
        <button
          className="bg-primary text-white py-2 px-4 w-44"
          onClick={props.scrollToAboutUs}
        >
          Read More
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 px-7 md:px-8 lg:px-14 xl:px-40 mt-9 md:mt-16">
        <div className="text-center flex flex-col items-center shadow-md px-8 py-10">
          <StaticImage src="../../images/fabric.png" width={50} />
          <span className="text-lg font-medium mt-5">We Design Fabric</span>
          <p className="text-textHint">
            We create beautiful fabrics that inspire your world.
          </p>
        </div>
        <div className="text-center flex flex-col items-center shadow-md px-8 py-10">
          <StaticImage src="../../images/machine.png" width={50} />
          <span className="text-lg font-medium mt-5">
            We have the Good Stuff
          </span>
          <p className="text-textHint">
            We offer top-quality fashion for the best you.
          </p>
        </div>
        <div className="text-center flex flex-col items-center shadow-md px-8 py-10">
          <StaticImage src="../../images/export.png" width={50} />
          <span className="text-lg font-medium mt-5">Always Genuine</span>
          <p className="text-textHint">Authenticity in every stitch, always.</p>
        </div>
      </div>
    </section>
  );
});

export default Hero;
