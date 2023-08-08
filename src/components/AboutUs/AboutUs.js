import { StaticImage } from "gatsby-plugin-image";
import React, { forwardRef } from "react";

const AboutUs = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="bg-secondary">
      <div className="flex flex-col md:flex-row md:flex gap-6 md:gap-16 px-7 md:px-8 lg:px-14 xl:px-28 2xl:px-60 py-20">
        <div className="w-1/2 md:w-auto">
          <StaticImage
            src="../../images/pexels-los-muertos-crew-7998333.jpg"
            width={600}
          />
        </div>
        <div>
          <span className="text-textHint">WHO WE ARE</span>
          <h2 className="text-xl md:text-2xl xl:text-4xl text-white">
            An Ultimate Textile Company
          </h2>
          <span className="text-xl md:text-2xl xl:text-4xl font-bold text-white">
            In the Market Since 2008
          </span>
          <p className="text-textHint mt-10">
            Welcome to our ultimate textile company, where creativity and
            craftsmanship blend to offer exceptional fabrics. Our collection
            caters to diverse tastes and needs, from luxurious to durable
            textiles. With innovation and eco-consciousness, we take pride in
            surpassing industry standards. Our personalized service ensures
            finding the perfect fabric for your vision. Embracing sustainability
            and ethical practices, we weave a brighter, beautiful future with
            timeless elegance and versatility in our textiles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
            <div className="flex items-center gap-2 text-white">
              <StaticImage src="../../images/check-mark.png" width={25} />
              <p>Extensive Experience</p>
            </div>
            <div className="flex items-center gap-2 text-white">
              <StaticImage src="../../images/check-mark.png" width={25} />
              <p>Innovative Product Range</p>
            </div>
            <div className="flex items-center gap-2 text-white">
              <StaticImage src="../../images/check-mark.png" width={25} />
              <p>Quality Assurance</p>
            </div>
            <div className="flex items-center gap-2 text-white">
              <StaticImage src="../../images/check-mark.png" width={25} />
              <p>Sustainable Practices</p>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <button
              className="bg-primary text-white px-6 py-2"
              onClick={props.scrollToContactUs}
            >
              Contact Us
            </button>
            <button
              className="bg-transparent border border-textHint text-textHint px-6 py-2"
              onClick={props.scrollToProducts}
            >
              View Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutUs;
