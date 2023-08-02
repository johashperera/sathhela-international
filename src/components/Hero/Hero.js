import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <section className="w-full h-[600px] flex items-center">
      <div className="flex flex-col gap-5 ps-28">
        <p className="text-primary">Where Fashion meets Authenticity</p>
        <h1 className="text-6xl font-medium">Sathhela International</h1>
        <p>Let's step into enhance your lifestyle like a royalty</p>
        <button className="bg-primary text-white py-2 w-3/5">Contact Us</button>
      </div>
    </section>
  );
};

export default Hero;
