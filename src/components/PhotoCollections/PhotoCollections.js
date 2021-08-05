import React, { useEffect, useState } from "react";
import "./PhotoCollections.css";
import { Link } from "react-router-dom";
import PhotoCards from "./PhotoCards";
import LoadingGif from "../../images/spinner.gif";

const PhotoCollections = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://agile-brook-68982.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <>
      <div className="container-fluid py-5">
        <div className="d-flex justify-content-center">
          <Link className="btn text-uppercase photo_header_btn text-white px-5 py-2">
            Let's see our collection >>
          </Link>
        </div>
        <div className="row py-5">
          {products.length === 0 && (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "140%",
                transform: "translate(-10%,-90%)",
              }}
            >
              <img
                style={{ width: "150px" }}
                src={LoadingGif}
                alt="LoadingGif"
              />
            </div>
          )}
          {products.map((product) => (
            <PhotoCards key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PhotoCollections;
