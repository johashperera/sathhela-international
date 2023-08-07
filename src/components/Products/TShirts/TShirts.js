import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const TShirts = () => {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-5 gap-5">
      <div>
        <StaticImage src="../../../images/TShirts/1.webp" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/TShirts/2.webp" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/TShirts/3.webp" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/TShirts/4.webp" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/TShirts/5.webp" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/TShirts/6.webp" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/TShirts/7.webp" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/TShirts/8.webp" width={230} />
      </div>
    </div>
  );
};

export default TShirts;
