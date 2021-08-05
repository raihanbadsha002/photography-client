import {
  faFacebook,
  faGoogle,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="bg-dark">
        <div className="container py-1">
          <div className="d-flex justify-content-between align-items-center">
            <div className="">
              <p className="mt-3 text-white footer__text">
                Copyright © 2021 All Rights Reserved by MD.Raihan Badsha.
              </p>
            </div>

            <div className="d-flex">
              <a
                href="http://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a
                href="http://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="http://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="http://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
