import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Leggings = () => {
  return (
    <div className="grid 2xl:grid-cols-5 gap-5">
      <div>
        <StaticImage src="../../../images/Leggings/1.webp" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/Leggings/2.webp" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/Leggings/3.jpeg" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/Leggings/4.webp" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/Leggings/5.webp" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/Leggings/6.webp" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/Leggings/7.webp" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/Leggings/8.webp" width={230} />
      </div>
    </div>
  );
};

export default Leggings;
