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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOnClose = () => {
    setIsMenuOpen(false);
  };

  const openDrawer = () => {
    setIsMenuOpen(true);
  };

  return (
    <>
      <div className="bg-secondary hidden lg:flex items-center justify-between lg:px-14 xl:px-28 2xl:px-52">
        <div className="lg:flex items-center divide-x-2">
          <div className="flex items-center gap-2 px-6 py-4 ">
            <FontAwesomeIcon icon={faEnvelope} color="#C3002F" />
            <p className="text-white text-base">info@sathhela.lk</p>
          </div>
          <div className="flex items-center px-6 py-4">
            <FontAwesomeIcon icon={faLocationDot} color="#C3002F" />
            <p className="text-white text-base">
              5 Samarakoon Mawatha, Piliyandala 10300, Sri Lanka
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-white">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>
      <div className="sticky top-0 z-50">
        <div className="flex items-center justify-between md:px-8 lg:px-14 xl:px-28 2xl:px-52 py-6 bg-[#F6F6F6] ">
          <div>
            <span className="lg:text-xl xl:text-2xl font-medium text-secondary">
              Sathhela International{" "}
            </span>
          </div>
          <ul className="hidden lg:flex items-center uppercase gap-7 lg:text-xs xl:text-sm">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>Products</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
          <div className="hidden lg:flex items-center gap-5">
            <FontAwesomeIcon
              icon={faComments}
              className="text-primary lg:text-xl xl:text-[30px]"
            />
            <div>
              <span>+94 77 442 6677</span>
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
              <div className="md:p-5 bg-secondary h-full flex flex-col justify-between text-white">
                <ul className="flex flex-col gap-4">
                  <li className="bg-bgHint py-2 px-2 rounded-lg">
                    <Link className="flex items-center gap-3">
                      <StaticImage
                        src="../../images/menu/home.png"
                        width={15}
                      />
                      Home
                    </Link>
                  </li>
                  <li className="bg-bgHint py-2 px-2 rounded-lg">
                    <Link className="flex items-center gap-3">
                      <StaticImage
                        src="../../images/menu/about.png"
                        width={15}
                      />
                      About Us
                    </Link>
                  </li>
                  <li className="bg-bgHint py-2 px-2 rounded-lg">
                    <Link className="flex items-center gap-3">
                      <StaticImage
                        src="../../images/menu/services.png"
                        width={15}
                      />
                      Services
                    </Link>
                  </li>
                  <li className="bg-bgHint py-2 px-2 rounded-lg">
                    <Link className="flex items-center gap-3">
                      <StaticImage
                        src="../../images/menu/products.png"
                        width={15}
                      />
                      Products
                    </Link>
                  </li>
                  <li className="bg-bgHint py-2 px-2 rounded-lg">
                    <Link className="flex items-center gap-3">
                      <StaticImage
                        src="../../images/menu/contact-us.png"
                        width={15}
                      />
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="mb-3">
                    <span>+94 77 442 6677</span>
                    <p>Have any Inquiries?</p>
                  </div>
                  <button className="bg-primary py-2 w-full">Call Now</button>
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
