import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Footer from "../../../components/Footer/Footer";
import StateNavBar from "../../../components/StateNavBar/StateNavBar";
import SideBar from "../../SideBar/SideBar";
import ManageProductData from "./ManageProductData";
import LoadingGif from "../../../images/spinner.gif";

const ManageProduct = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [products, setProducts] = useState([]);

  const fetchProductList = () => {
    if (!url) {
      return;
    }
  };
  const url = "https://agile-brook-68982.herokuapp.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((data) => setProducts(data));

  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <>
      <StateNavBar />
      <section className="container pb-5">
        <div className="row">
          <div className="col-md-2 col-sm-6 col-12">
            <SideBar />
          </div>
          <div
            className="py-4 col-md-10 col-sm-12 col-12 bg-light"
            style={{ height: "110vh" }}
          >
            <div className="d-flex justify-content-around align-items-center text-info p-2 bg-white text-uppercase">
              <h2 className="">Manage Products</h2>
              <img
                style={{ width: "40px" }}
                className="rounded-circle"
                src={loggedInUser.image}
                alt=""
              />
            </div>
            <div className="row d-flex justify-content-center mt-5">
              <div className="col-md-10 bg-white shadow-lg rounded">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Service Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.length === 0 && (
                      <div
                        style={{
                          position: "absolute",
                          left: "50%",
                          top: "60%",
                          transform: "translate(-20%,-80%)",
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
                      <ManageProductData
                        product={product}
                        key={product._id}
                        fetchProductList={fetchProductList}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ManageProduct;
