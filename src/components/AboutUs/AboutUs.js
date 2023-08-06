import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-secondary">
      <div className="flex gap-16 px-60 py-20">
        <div>
          <StaticImage
            src="../../images/pexels-los-muertos-crew-7998333.jpg"
            width={600}
          />
        </div>
        <div>
          <span className="text-textHint">WHO WE ARE</span>
          <h2 className="text-4xl text-white">An Ultimate Textile Company</h2>
          <span className="text-4xl font-bold text-white">
            In the Market Since 2008
          </span>
          <p className="text-textHint mt-10">
            Morbi maximus posuere velit vitae aliquam. Nulla dictum viverra leo,
            et mattis ipsum dapibus quis. Sed ut suscipit elit. Donec pretium
            varius nulla in bibendum. Quisque ut vehicula lacus. Vivamus vel
            libero est. Mauris pulvinar ipsum nec enim laoreet
          </p>
          <div className="grid grid-cols-2 gap-2 mt-8">
            <div className="flex items-center gap-2 text-white">
              <StaticImage src="../../images/check-mark.png" width={25} />
              <p>Lorem ipsum dolor sit</p>
            </div>
            <div className="flex items-center gap-2 text-white">
              <StaticImage src="../../images/check-mark.png" width={25} />
              <p>Lorem ipsum dolor sit</p>
            </div>
            <div className="flex items-center gap-2 text-white">
              <StaticImage src="../../images/check-mark.png" width={25} />
              <p>Lorem ipsum dolor sit</p>
            </div>
            <div className="flex items-center gap-2 text-white">
              <StaticImage src="../../images/check-mark.png" width={25} />
              <p>Lorem ipsum dolor sit</p>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <button className="bg-primary text-white px-6 py-2 ">
              Contact Us
            </button>
            <button className="bg-transparent border border-textHint text-textHint px-6 py-2">
              View Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
