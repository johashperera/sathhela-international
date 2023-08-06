import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-bgHint pt-20">
      <div className="flex justify-between px-60 pb-20">
        <span className="text-3xl font-bold text-white">
          Sathhela International
        </span>
        <p className="w-1/2 text-textHint">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tortor
          efficitur, vehicula leo quis, viverra tellus. Ut augue turpis, cursus
          accumsan facilisis sit amet
        </p>
        <div className="flex items-center gap-4">
          <div className="bg-[#333c44] w-8 h-8 flex items-center justify-center p-2 rounded-full">
            <StaticImage
              src="../../images/social-white/facebook-app-symbol.png"
              width={20}
            />
          </div>
          <div className="bg-[#333c44] w-8 h-8 flex items-center justify-center p-2 rounded-full">
            <StaticImage
              src="../../images/social-white/instagram.png"
              width={20}
            />
          </div>
          <div className="bg-[#333c44] w-8 h-8 flex items-center justify-center p-2 rounded-full">
            <StaticImage
              src="../../images/social-white/twitter.png"
              width={20}
            />
          </div>
          <div className="bg-[#333c44] w-8 h-8 flex items-center justify-center p-2 rounded-full">
            <StaticImage
              src="../../images/social-white/google.png"
              width={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
