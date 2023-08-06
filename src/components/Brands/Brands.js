import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Brands = () => {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="flex justify-center items-center gap-16 py-8">
        <div>
          <StaticImage src="../../images/Brands/1.png" width={150} />
        </div>
        <div>
          <StaticImage src="../../images/Brands/2.png" width={150} />
        </div>
        <div>
          <StaticImage src="../../images/Brands/3.png" width={150} />
        </div>
        <div>
          <StaticImage src="../../images/Brands/4.png" width={150} />
        </div>
        <div>
          <StaticImage src="../../images/Brands/2.png" width={150} />
        </div>
      </div>
    </section>
  );
};

export default Brands;
