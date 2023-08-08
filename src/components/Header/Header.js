import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faComments } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Header = ({
  scrollToHero,
  scrollToAboutUs,
  scrollToServices,
  scrollToProducts,
  scrollToContactUs,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOnClose = () => {
    setIsMenuOpen(false);
  };

  const openDrawer = () => {
    setIsMenuOpen(true);
  };

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

  const redirectToInstagram = () => {
    window.open("https://www.instagram.com/daily.casuals/", "_blank");
  };

  const handleCallGm = () => {
    const phoneNumber = "+94762636255"; // Replace with the actual phone number
    const telUri = `tel:${phoneNumber}`;
    window.location.href = telUri;
  };

  return (
    <>
      <div className="bg-secondary hidden lg:flex items-center justify-between lg:px-14 xl:px-28 2xl:px-52">
        <div className="lg:flex items-center divide-x-2">
          <div className="flex items-center gap-2 px-6 py-4 ">
            <StaticImage src="../../images/email.png" width={18} />
            <p className="text-white text-base">info@sathhela.lk</p>
          </div>
          <div className="flex items-center gap-2 px-6 py-4 cursor-pointer">
            <StaticImage src="../../images/location-pin.png" width={18} />
            <p className="text-white text-base" onClick={openInMaps}>
              5 Samarakoon Mawatha, Piliyandala 10300, Sri Lanka
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-white">
          <div onClick={redirectToFacebook} className="cursor-pointer">
            <StaticImage
              src="../../images/social-white/facebook-app-symbol.png"
              width={18}
            />
          </div>
          <div onClick={redirectToInstagram} className="cursor-pointer">
            <StaticImage
              src="../../images/social-white/instagram.png"
              width={18}
            />
          </div>
          <div className="cursor-pointer">
            <StaticImage
              src="../../images/social-white/twitter.png"
              width={18}
            />
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-50">
        <div className="flex items-center justify-between px-7 md:px-8 lg:px-14 xl:px-28 2xl:px-52 py-6 bg-[#F6F6F6] ">
          <div>
            <span className="uppercase md:text-lg lg:text-xl xl:text-2xl font-medium text-secondary">
              Sathhela International{" "}
            </span>
          </div>
          <ul className="hidden lg:flex items-center uppercase gap-7 lg:text-xs xl:text-sm">
            <li className="cursor-pointer">
              <button onClick={scrollToHero} className="uppercase">
                Home
              </button>
            </li>
            <li className="cursor-pointer">
              <button onClick={scrollToAboutUs} className="uppercase">
                About Us
              </button>
            </li>
            <li className="cursor-pointer">
              <button onClick={scrollToServices} className="uppercase">
                Services
              </button>
            </li>
            <li className="cursor-pointer">
              <button onClick={scrollToProducts} className="uppercase">
                Products
              </button>
            </li>
            <li className="cursor-pointer">
              <button onClick={scrollToContactUs} className="uppercase">
                Contact Us
              </button>
            </li>
          </ul>
          <div className="hidden lg:flex items-center gap-5">
            <FontAwesomeIcon
              icon={faComments}
              className="text-primary lg:text-xl xl:text-[30px]"
            />
            <div>
              <span>+94 76 263 6255</span>
              <p>Have any Inquiries?</p>
            </div>
          </div>
          <div className="block lg:hidden">
            <button onClick={openDrawer}>
              <StaticImage src="../../images/menu.png" width={20} />
            </button>
            <Drawer
              open={isMenuOpen}
              onClose={handleOnClose}
              direction="right"
              size={300}
            >
              <div className="p-4 md:p-5 bg-secondary h-full flex flex-col justify-around text-white">
                <ul className="flex flex-col gap-4">
                  <li className="bg-bgHint py-2 px-2 rounded-lg">
                    <button
                      className="flex items-center gap-3 w-full"
                      onClick={() => {
                        scrollToHero();
                        handleOnClose();
                      }}
                    >
                      <StaticImage
                        src="../../images/menu/home.png"
                        width={15}
                      />
                      Home
                    </button>
                  </li>
                  <li className="bg-bgHint py-2 px-2 rounded-lg">
                    <button
                      className="flex items-center gap-3 w-full"
                      onClick={() => {
                        scrollToAboutUs();
                        handleOnClose();
                      }}
                    >
                      <StaticImage
                        src="../../images/menu/about.png"
                        width={15}
                      />
                      About Us
                    </button>
                  </li>
                  <li className="bg-bgHint py-2 px-2 rounded-lg">
                    <button
                      className="flex items-center gap-3 w-full"
                      onClick={() => {
                        scrollToServices();
                        handleOnClose();
                      }}
                    >
                      <StaticImage
                        src="../../images/menu/services.png"
                        width={15}
                      />
                      Services
                    </button>
                  </li>
                  <li className="bg-bgHint py-2 px-2 rounded-lg">
                    <button
                      className="flex items-center gap-3 w-full"
                      onClick={() => {
                        scrollToProducts();
                        handleOnClose();
                      }}
                    >
                      <StaticImage
                        src="../../images/menu/products.png"
                        width={15}
                      />
                      Products
                    </button>
                  </li>
                  <li className="bg-bgHint py-2 px-2 rounded-lg">
                    <button
                      className="flex items-center gap-3 w-full"
                      onClick={() => {
                        scrollToContactUs();
                        handleOnClose();
                      }}
                    >
                      <StaticImage
                        src="../../images/menu/contact-us.png"
                        width={15}
                      />
                      Contact Us
                    </button>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="mb-3">
                    <span>+94 76 263 6255</span>
                    <p>Have any Inquiries?</p>
                  </div>
                  <button
                    className="bg-primary py-2 w-full"
                    onClick={handleCallGm}
                  >
                    Call Now
                  </button>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
