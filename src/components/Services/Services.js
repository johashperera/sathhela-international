import { StaticImage } from "gatsby-plugin-image";
import React, { forwardRef } from "react";

const Services = forwardRef((props, ref) => {
  const openInMaps = () => {
    window.open(
      "https://www.google.com/maps/dir//sathhela+international/@6.8369612,79.8800335,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ae24552a47d17e7:0xe0ade19bb671bde6!2m2!1d79.9171283!2d6.8056441?entry=ttu",
      "_blank"
    );
  };

  const redirectToFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100093374664373&mibextid=LQQJ4d",
      "_blank"
    );
  };

  return (
    <section ref={ref} className="bg-[#F8F8F8]">
      <div className="px-7 md:px-8 lg:px-14 xl:px-28 2xl:px-60 py-20">
        <div className="text-center">
          <span className="text-primary font-medium">OUR SERVICES</span>
          <h2 className="text-xl md:text-2xl xl:text-4xl text-secondary mt-3">
            We Take Pride in Offering a <br />
            <span className="font-bold">Diverse Range of Services</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-7 md:mt-12">
          <div className="text-left flex flex-col items-start shadow-lg p-5 rounded-lg">
            <StaticImage src="../../images/garments.png" width={60} />
            <span className="md:text-lg font-semibold mt-4">
              Customized production of Undergarments & Tee Shirts
            </span>
            <p className="text-textHint">
              Tailored to perfection, your comfort, your style - Custom
              undergarments and tees, made just for you.
            </p>
          </div>
          <div
            className="text-left flex flex-col items-start shadow-lg p-5 rounded-lg cursor-pointer hover:border-b-4 border-primary transition-all"
            onClick={openInMaps}
          >
            <StaticImage src="../../images/outlet.png" width={60} />
            <span className="md:text-lg font-semibold mt-4">
              Factory Outlet
            </span>
            <p className="text-textHint">
              Discover unbeatable deals and factory-fresh finds at our outlet -
              Where quality meets affordability.
            </p>
          </div>
          <div className="text-left flex flex-col items-start shadow-lg p-5 rounded-lg">
            <StaticImage src="../../images/import.png" width={60} />
            <span className="md:text-lg font-semibold mt-4">
              Importing Cotton, Lycra, Polycotton, Wetlook & Pique Fabrics
            </span>
            <p className="text-textHint">
              Unleash the world of possibilities - Elevate your creations with
              our curated fabrics from across the globe.
            </p>
          </div>
          <div
            className="text-left flex flex-col items-start shadow-lg p-5 rounded-lg cursor-pointer hover:border-b-4 border-primary transition-all"
            onClick={redirectToFacebook}
          >
            <StaticImage src="../../images/online-store.png" width={60} />
            <span className="md:text-lg font-semibold mt-4">
              Online Clothing Store on Social Media
            </span>
            <p className="text-textHint">
              Step into style with a click - Explore our online clothing store
              on social media, where fashion meets convenience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Services;
