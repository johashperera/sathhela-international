import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Services = () => {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="px-60 py-20">
        <div className="text-center">
          <span className="text-primary font-medium">OUR SERVICES</span>
          <h2 className="text-4xl text-secondary mt-3">
            We Take Pride in Offering a <br />
            <span className="font-bold">Diverse Range of Services</span>
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-8 mt-12">
          <div className="text-left flex flex-col items-start shadow-lg p-5 rounded-lg">
            <StaticImage src="../../images/garments.png" width={60} />
            <span className="text-lg font-semibold mt-4">
              Customized product of Undergarments & T-shirts
            </span>
            <p className="text-textHint">
              Duis sollicitudin maximus mi sit amet posuere. Fusce viverra
              libero ut orci dapibus viverra
            </p>
          </div>
          <div className="text-left flex flex-col items-start shadow-lg p-5 rounded-lg">
            <StaticImage src="../../images/outlet.png" width={60} />
            <span className="text-lg font-semibold mt-4">Factory Outlet</span>
            <p className="text-textHint">
              Duis sollicitudin maximus mi sit amet posuere. Fusce viverra
              libero ut orci dapibus viverra
            </p>
          </div>
          <div className="text-left flex flex-col items-start shadow-lg p-5 rounded-lg">
            <StaticImage src="../../images/import.png" width={60} />
            <span className="text-lg font-semibold mt-4">
              Importing Cotton, Lycra & Polycotton Fabrics
            </span>
            <p className="text-textHint">
              Duis sollicitudin maximus mi sit amet posuere. Fusce viverra
              libero ut orci dapibus viverra
            </p>
          </div>
          <div className="text-left flex flex-col items-start shadow-lg p-5 rounded-lg">
            <StaticImage src="../../images/online-store.png" width={60} />
            <span className="text-lg font-semibold mt-4">
              Online Clothing Store on Social Meida
            </span>
            <p className="text-textHint">
              Duis sollicitudin maximus mi sit amet posuere. Fusce viverra
              libero ut orci dapibus viverra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
