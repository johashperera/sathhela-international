import React from "react";

const ContactUs = () => {
  return (
    <section>
      <div className="grid grid-cols-2">
        <div className="bg-secondary ps-12 pe-10 py-20">
          <div>
            <span className="text-textHint">CONTACT US</span>
            <h2 className="text-white font-normal text-4xl ">
              Get In <span className="font-bold">Touch</span>
            </h2>
            <p className="text-textHint">
              Loream ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="bg-white ps-10 pe-10 py-20">
          <form>
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 border w-1/2"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-2 border w-1/2"
              />
            </div>
            <div className="flex gap-5 mt-5">
              <input
                type="number"
                placeholder="Contact Number"
                className="p-2 border w-1/2"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-2 border w-1/2"
              />
            </div>
            <div className="mt-5 mb-5">
              <textarea
                className="w-full p-2 border"
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
