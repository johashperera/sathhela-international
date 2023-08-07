import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const LadiesBriefs = () => {
  return (
    <div className="grid xl:grid-cols-5 gap-5">
      <div>
        <StaticImage src="../../../images/Briefs/1.jpg" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/Briefs/2.jpg" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/Briefs/3.jpg" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/Briefs/4.jpg" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/Briefs/5.jpg" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/Briefs/6.jpg" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/Briefs/7.jpg" width={230} />
      </div>
      <div>
        <StaticImage src="../../../images/Briefs/8.jpg" width={230} />
      </div>
    </div>
  );
};

export default LadiesBriefs;
