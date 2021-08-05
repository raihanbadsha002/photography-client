import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import StateNavBar from "../../components/StateNavBar/StateNavBar";

const ViewMore = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://agile-brook-68982.herokuapp.com/viewMore/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <>
      <StateNavBar />
      <main className="view__section py-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10">
              <div className="card">
                <img
                  src={product.imageURL}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h4 className="card-title text-center text-uppercase">
                    {product.ptitle}
                  </h4>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ViewMore;
