import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faComments } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "gatsby";

const Header = () => {
  return (
    <>
      <div className="bg-secondary flex items-center justify-between xl:px-28 2xl:px-52">
        <div className="xl:flex items-center divide-x-2">
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
        <div className="flex items-center justify-between xl:px-28 2xl:px-52 py-6 bg-[#F6F6F6] ">
          <div>
            <span className="text-2xl font-medium text-secondary">
              Sathhela International{" "}
            </span>
          </div>
          <ul className="flex items-center uppercase gap-7 text-sm">
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
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              icon={faComments}
              className="text-primary text-[30px]"
            />
            <div>
              <span>+94 77 442 6677</span>
              <p>Have any Inquiries?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
