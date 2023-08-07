import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Details = () => {
  return (
    <section className="bg-bgHint w-full relative">
      <div className="md:px-8 lg:px-14 xl:px-28 2xl:px-60 py-20">
        <div className="grid xl:grid-cols-2">
          <div>
            <span className="text-textHint font-medium">WELL CRAFTED</span>
            <h2 className="md:text-2xl xl:text-4xl text-white">
              We Provide Garments
            </h2>
            <span className="md:text-2xl  xl:text-4xl font-semibold text-white">
              Clothes that make You Stand Out
            </span>
            <p className="text-textHint mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
              eros sagittis, aliquet nibh vel, rutrum nisi. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Nam vulputate ipsum augue
            </p>
            <hr className="my-7" />
            <div className="grid grid-cols-3">
              <div className="flex items-center gap-3 text-white">
                <StaticImage src="../../images/factory.png" width={50} />
                <div>
                  <span className="font-semibold text-3xl">3</span>
                  <p>Factories</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <StaticImage src="../../images/equipment.png" width={50} />
                <div>
                  <span className="font-semibold text-3xl">75 +</span>
                  <p>Machines</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <StaticImage src="../../images/employees.png" width={50} />
                <div>
                  <span className="font-semibold text-3xl">100 +</span>
                  <p>Employees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white xl:absolute p-5 w-fit xl:left-[60%] 2xl:right-0 -bottom-5 shadow-xl">
        <StaticImage src="../../images/machinery.webp" width={600} />
      </div>
    </section>
  );
};

export default Details;
