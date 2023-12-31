import { StaticImage } from "gatsby-plugin-image";
import React, { forwardRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = forwardRef((props, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleCallMd = () => {
    const phoneNumber = "+94777399284";
    const telUri = `tel:${phoneNumber}`;
    window.location.href = telUri;
  };

  const handleCallGm = () => {
    const phoneNumber = "+94762636255";
    const telUri = `tel:${phoneNumber}`;
    window.location.href = telUri;
  };

  const onSubmit = (formData) => {
    toast
      .promise(
        emailjs.send(
          "service_hi9k5jp",
          "template_z189cap",
          formData,
          "Wxe4PSLlz0f54V-xU"
        ),
        {
          pending: "Sending email...",
          success: "Email Sent",
          error: "Failed to send email",
        }
      )
      .then(() => {
        reset();
      });

    // reset();
  };

  return (
    <section
      ref={ref}
      className="pb-20 px-7 md:px-8 lg:px-14 xl:px-28 2xl:px-60"
    >
      <div className="text-center">
        <span className="text-primary ">Like what you saw?</span>
        <h2 className="text-secondary text-xl md:text-2xl xl:text-4xl font-bold">
          Let's have a Conversation
        </h2>
      </div>
      <div className="flex flex-col md:flex-col xl:flex-row mt-10 pb-8">
        <div className=" xl:ps-12 md:pe-10 pt-5 md:w-full lg:w-[45%] order-2 md:order-2 lg:order-1">
          <div>
            <div className="border-r-2 border-primary bg-[#F8F8F8] p-7 rounded-lg">
              <p className="text-secondary text-xl font-medium">
                Mr. Padmasiri Dharmaratne
              </p>
              <span className="text-textHint">Managing Director</span>
              <div
                className="flex items-center gap-3 text-bgHint mb-2 mt-4 cursor-pointer"
                onClick={handleCallMd}
              >
                <StaticImage src="../../images/phone.png" width={20} />
                <p>+94 77 739 9284</p>
              </div>
              <div className="flex items-center gap-3 text-bgHint">
                <StaticImage src="../../images/email.png" width={20} />
                <p>sathhelagarments@gmail.com</p>
              </div>
            </div>
            <div className="border-r-2 border-primary mt-7 md:mt-5 lg:mt-10 bg-[#F8F8F8] p-7 rounded-lg">
              <p className="text-secondary text-xl font-medium">
                Mr. I. A. D. Udara
              </p>
              <span className="text-textHint">General Manager</span>
              <div
                className="flex items-center gap-3 text-bgHint mb-2 mt-4 cursor-pointer"
                onClick={handleCallGm}
              >
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
        <div className="bg-white order-1 xl:ps-10 xl:pe-10 md:pt-5 md:w-full lg:w-[55%] md:order-1 lg:order-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-3 w-full  border-0 bg-[#F8F8F8] text-sm outline-none"
                  {...register("name", { required: "Your Name is required" })}
                />
                {errors.name && (
                  <div className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </div>
                )}
              </div>
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-3 border-0 bg-[#F8F8F8] w-full  text-sm outline-none"
                  {...register("email", { required: "Your Email is required" })}
                />
                {errors.email && (
                  <div className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-5">
              <div className="w-full">
                <input
                  type="number"
                  placeholder="Contact Number"
                  className="p-3 border-0 bg-[#F8F8F8] w-full  text-sm outline-none"
                  {...register("contactNumber", {
                    required: "Contact Number is required",
                  })}
                />
                {errors.contactNumber && (
                  <div className="text-red-400 text-sm mt-1">
                    {errors.contactNumber.message}
                  </div>
                )}
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Subject"
                  className="p-3 border-0 bg-[#F8F8F8] w-full  text-sm outline-none"
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && (
                  <div className="text-red-400 text-sm mt-1">
                    {errors.subject.message}
                  </div>
                )}
              </div>
            </div>
            <div className="mt-5 mb-5">
              <textarea
                className="w-full p-3 border-0 bg-[#F8F8F8] text-sm resize-none outline-none"
                rows="10"
                placeholder="Message"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && (
                <div className="text-red-400 text-sm mt-1">
                  {errors.message.message}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="bg-primary px-16 py-2 w-full md:w-auto text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-center" theme="dark" autoClose={3000} />
    </section>
  );
});

export default ContactUs;
