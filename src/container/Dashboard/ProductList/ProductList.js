import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Footer from "../../../components/Footer/Footer";
import StateNavBar from "../../../components/StateNavBar/StateNavBar";
import SideBar from "../../SideBar/SideBar";
import ProductListCard from "./ProductListCard";

const ProductList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    fetch(
      `https://agile-brook-68982.herokuapp.com/productList/?email=${loggedInUser.email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setBookingList(data));
  }, [loggedInUser.email]);

  return (
    <>
      <StateNavBar />
      <section className="container">
        <div className="row">
          <div className="col-md-2 col-sm-6 col-12">
            <SideBar />
          </div>
          <div
            className="py-4 col-md-10 col-sm-12 col-12 bg-light"
            style={{ height: "97vh" }}
          >
            <div className="d-flex justify-content-around align-items-center text-info p-2 bg-white text-uppercase">
              <h2 className="">Services List</h2>
              <img
                style={{ width: "40px" }}
                className="rounded-circle"
                src={loggedInUser.image}
                alt=""
              />
            </div>
            <div className="row mt-5">
              {bookingList.map((bList) => (
                <ProductListCard bList={bList} key={bList._id} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductList;
