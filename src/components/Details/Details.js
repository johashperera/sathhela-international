import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Details = () => {
  return (
    <section className="bg-bgHint w-full relative">
      <div className="px-7 md:px-8 lg:px-14 xl:px-28 2xl:px-60 py-20">
        <div className="grid xl:grid-cols-2">
          <div>
            <span className="text-textHint font-medium">WELL CRAFTED</span>
            <h2 className="text-xl md:text-2xl xl:text-4xl text-white">
              We Provide Garments
            </h2>
            <span className="text-xl md:text-2xl  xl:text-4xl font-semibold text-white">
              Clothes that make You Stand Out
            </span>
            <p className="text-textHint mt-8">
              Step into a world where fashion meets individuality. Our garments
              are more than just clothes; they are a statement of
              self-expression. With meticulous craftsmanship and attention to
              detail, each piece is designed to make you stand out with
              confidence and style. Embrace your uniqueness and let our
              collections be the canvas for your personality. Whether it's
              classic elegance or contemporary flair, we cater to every taste,
              ensuring that you shine wherever you go. Elevate your fashion game
              and make a lasting impression with our garments that celebrate
              your distinctiveness.
            </p>
            <hr className="my-7" />
            <div className="grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-3">
              <div className="flex items-center gap-3 text-white">
                <StaticImage src="../../images/factory.png" width={50} />
                <div>
                  <span className="font-semibold text-xl md:text-3xl">3</span>
                  <p>Factories</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <StaticImage src="../../images/equipment.png" width={50} />
                <div>
                  <span className="font-semibold text-xl md:text-3xl">
                    75 +
                  </span>
                  <p>Machines</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <StaticImage src="../../images/employees.png" width={50} />
                <div>
                  <span className="font-semibold text-xl md:text-3xl">
                    100 +
                  </span>
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
