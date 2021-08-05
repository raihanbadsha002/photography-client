import React from "react";
import { Link } from "react-router-dom";
import "./PhotoCollections.css";

const PhotoCards = (props) => {
  const { _id, ptitle, price, imageURL } = props.product;
  return (
    <>
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div
          className="card bg-dark mb-4 photo__card"
          data-aos="zoom-in"
          data-aos-delay="60"
          data-aos-duration="2000"
        >
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body d-flex justify-content-between">
            <p className="card-title text-white text-uppercase">{ptitle}</p>
            <h5 className="card-title text-white">$ {price}</h5>
          </div>
          <div className="d-flex justify-content-center pb-4">
            <Link
              className="header_btn_1 text-white text-uppercase"
              to={`viewMore/${_id}`}
            >
              View More >>
            </Link>
            <Link
              className="header_btn_2 text-white text-uppercase"
              to={`buyProduct/${_id}`}
            >
              Buy now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoCards;
