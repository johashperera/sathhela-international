import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const ContactUs = () => {
  return (
    <section>
      <div className="text-center">
        <span className="text-primary ">Like what you saw?</span>
        <h2 className="text-secondary text-4xl font-bold">
          Let's have a Conversation
        </h2>
      </div>
      <div className="grid grid-cols-2">
        <div className=" ps-12 pe-10 py-20">
          {/* <div>
            <span className="text-textHint">CONTACT US</span>
            <h2 className="text-white font-normal text-4xl ">
              Get In <span className="font-bold">Touch</span>
            </h2>
            <p className="text-textHint">
              Loream ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div> */}
          <div>
            <div className="border-r-2 border-primary bg-secondary p-7 rounded-lg">
              <p className="text-white text-lg font-medium">
                Mr. Padmasiri Dharmaratne
              </p>
              <span className="text-textHint">Managing Director</span>
              <div className="flex items-center gap-3 text-white my-2">
                <StaticImage src="../../images/phone.png" width={25} />
                <p>+94 77 739 9284</p>
              </div>
              <div className="flex items-center gap-3 text-white">
                <StaticImage src="../../images/email.png" width={25} />
                <p>sathhelagarments@gmail.com</p>
              </div>
            </div>
            <div className="border-r-2 border-primary mt-10 bg-secondary p-7 rounded-lg">
              <p className="text-white text-lg font-medium">
                Mr. I. A. D. Udara
              </p>
              <span className="text-textHint">General Manager</span>
              <div className="flex items-center gap-3 text-white my-2">
                <StaticImage src="../../images/phone.png" width={25} />
                <p>+94 76 263 6255</p>
              </div>
              <div className="flex items-center gap-3 text-white">
                <StaticImage src="../../images/email.png" width={25} />
                <p>iadasith@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white ps-10 pe-10 pt-5">
          {/* <div>
            <span className="text-textHint">SEND A MESSAGE</span>
            <h2 className="text-secondary font-normal text-4xl ">
              Let's start a <span className="font-bold">Conversation</span>
            </h2>
          </div> */}
          <form className="mt-10">
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 w-1/2 border-0 bg-[#F8F8F8] text-sm outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 border-0 bg-[#F8F8F8] w-1/2 text-sm outline-none"
              />
            </div>
            <div className="flex gap-5 mt-5">
              <input
                type="number"
                placeholder="Contact Number"
                className="p-3 border-0 bg-[#F8F8F8] w-1/2 text-sm outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-3 border-0 bg-[#F8F8F8] w-1/2 text-sm outline-none"
              />
            </div>
            <div className="mt-5 mb-5">
              <textarea
                className="w-full p-3 border-0 bg-[#F8F8F8] text-sm resize-none outline-none"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="bg-primary px-16 py-2 text-white">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
