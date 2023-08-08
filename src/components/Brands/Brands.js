import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Brands = () => {
  return (
    <section className="bg-[#F8F8F8] flex justify-center md:block">
      <div className="grid grid-cols-1 gap-3 md:flex md:justify-center md:items-center md:gap-16 py-8">
        <div>
          <StaticImage src="../../images/Brands/caliber.png" width={150} />
        </div>
        <div>
          <StaticImage src="../../images/Brands/dilrich.png" width={150} />
        </div>
        <div>
          <StaticImage src="../../images/Brands/oleena.png" width={150} />
        </div>
      </div>
    </section>
  );
};

export default Brands;
