import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Tooltip } from "react-tooltip";

const Footer = () => {
  const redirectToFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100093374664373&mibextid=LQQJ4d",
      "_blank"
    );
  };

  const redirectToInstagram = () => {
    window.open("https://www.instagram.com/daily.casuals/", "_blank");
  };

  const handleSearchClick = () => {
    const searchQuery = "sathhela international"; // Replace with the actual search query
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      searchQuery
    )}`;
    window.open(googleSearchUrl, "_blank");
  };

  return (
    <section className="bg-bgHint pt-20">
      <div className="lg:flex justify-between lg:gap-4 xl:gap-0 px-7 md:px-8 lg:px-14 xl:px-28 2xl:px-60 pb-20">
        <span className="md:text-2xl xl:text-3xl font-bold text-white uppercase">
          Sathhela International
        </span>
        <p className="md:w-1/2 text-textHint">Where Fashion Comes to Life.</p>
        <div className="flex items-center gap-4 mt-7 md:mt-6 lg:mt-0">
          <div
            onClick={redirectToFacebook}
            className="bg-[#333c44] w-8 h-8 flex items-center justify-center p-2 rounded-full hover:bg-primary transition-colors duration-300 cursor-pointer"
          >
            <StaticImage
              src="../../images/social-white/facebook-app-symbol.png"
              width={20}
            />
          </div>
          <div
            onClick={redirectToInstagram}
            className="bg-[#333c44] w-8 h-8 flex items-center justify-center p-2 rounded-full hover:bg-primary transition-colors duration-300 cursor-pointer"
          >
            <StaticImage
              src="../../images/social-white/instagram.png"
              width={20}
            />
          </div>
          <div className="bg-[#333c44] w-8 h-8 flex items-center justify-center p-2 rounded-full hover:bg-primary transition-colors duration-300 cursor-pointer">
            <StaticImage
              src="../../images/social-white/twitter.png"
              width={20}
            />
          </div>
          <div
            className="bg-[#333c44] w-8 h-8 flex items-center justify-center p-2 rounded-full hover:bg-primary transition-colors duration-300 cursor-pointer"
            onClick={handleSearchClick}
          >
            <StaticImage
              src="../../images/social-white/google.png"
              width={20}
            />
          </div>
        </div>
      </div>
      <div className="px-7 md:px-8 lg:px-14 xl:px-28 2xl:px-60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
          <input
            type="text"
            className="bg-[#26313A] outline-none px-4 py-2"
            placeholder="Your Name"
          />
          <input
            type="text"
            className="bg-[#26313A] outline-none px-4 py-2"
            placeholder="Your Email"
          />
          <button
            className="bg-primary text-white py-3"
            disabled
            data-tooltip-id="subscribe-tooltip"
          >
            Subscribe
          </button>
          <Tooltip
            id="subscribe-tooltip"
            place="top"
            content="This feature is not available yet. Try again later!"
          />
        </div>
      </div>
      <div className="bg-[#1E2830] mt-10 text-center py-4">
        <p className="text-white text-xs md:text-base">
          Copy © 2023{" "}
          <span className="text-primary uppercase">Sathhela International</span>{" "}
          All Rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
