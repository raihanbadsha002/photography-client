import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header__bg">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div
                className="header__contain"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <p className="custom_text">We are creative photographer</p>
                <p className="text-white custom_contain">
                  Lorem ipsum dolor sit am et, consec tetur adipi scing elit.
                  Sed sodales enim ut rhoncus lorem ipsum ese terds.There are
                  many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly
                  believable. If you are going to use a passage of Lorem Ipsum,
                  you need to be sure there isn't anything embarrassing hidden
                  in the middle of text.
                </p>
                <div className="d-flex">
                  <Link
                    className="header_btn_1 text-white text-uppercase"
                    data-aos="fade-down"
                    data-aos-delay="60"
                    data-aos-duration="2000"
                  >
                    Contact Us
                  </Link>
                  <Link
                    className="header_btn_2 text-white text-uppercase"
                    data-aos="fade-down"
                    data-aos-delay="60"
                    data-aos-duration="2000"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
