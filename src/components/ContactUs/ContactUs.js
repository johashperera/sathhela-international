import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const ContactUs = () => {
  return (
    <section className="pb-20 px-60">
      <div className="text-center">
        <span className="text-primary ">Like what you saw?</span>
        <h2 className="text-secondary text-4xl font-bold">
          Let's have a Conversation
        </h2>
      </div>
      <div className="flex mt-10 pb-8">
        <div className=" ps-12 pe-10 pt-5 w-[45%]">
          <div>
            <div className="border-r-2 border-primary bg-[#F8F8F8] p-7 rounded-lg">
              <p className="text-secondary text-xl font-medium">
                Mr. Padmasiri Dharmaratne
              </p>
              <span className="text-textHint">Managing Director</span>
              <div className="flex items-center gap-3 text-bgHint mb-2 mt-4">
                <StaticImage src="../../images/phone.png" width={20} />
                <p>+94 77 739 9284</p>
              </div>
              <div className="flex items-center gap-3 text-bgHint">
                <StaticImage src="../../images/email.png" width={20} />
                <p>sathhelagarments@gmail.com</p>
              </div>
            </div>
            <div className="border-r-2 border-primary mt-10 bg-[#F8F8F8] p-7 rounded-lg">
              <p className="text-secondary text-xl font-medium">
                Mr. I. A. D. Udara
              </p>
              <span className="text-textHint">General Manager</span>
              <div className="flex items-center gap-3 text-bgHint mb-2 mt-4">
                <StaticImage src="../../images/phone.png" width={20} />
                <p>+94 76 263 6255</p>
              </div>
              <div className="flex items-center gap-3 text-bgHint">
                <StaticImage src="../../images/email.png" width={20} />
                <p>iadasith@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white ps-10 pe-10 pt-5 w-[55%]">
          <form>
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
