import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const TShirts = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5">
      <div>
        <StaticImage src="../../../images/TShirts/1.jpg" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/TShirts/2.jpg" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/TShirts/3.jpg" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/TShirts/4.jpg" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/TShirts/5.jpg" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/TShirts/6.jpg" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/TShirts/7.jpg" width={230} />
      </div>
    </div>
  );
};

export default TShirts;
