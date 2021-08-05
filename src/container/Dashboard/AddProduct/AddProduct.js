import React, { useContext } from "react";
import { UserContext } from "../../../App";
import Footer from "../../../components/Footer/Footer";
import StateNavBar from "../../../components/StateNavBar/StateNavBar";
import SideBar from "../../SideBar/SideBar";
import AddProductFrom from "./AddProductFrom";

const AddProduct = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <>
      <StateNavBar />
      <section className="container py-5">
        <div className="row">
          <div className=" col-lg-2 col-md-4 col-sm-6 col-12">
            <SideBar />
          </div>
          <div className="py-4 col-lg-10 col-md-8 col-sm-12 col-12 bg-light">
            <div className="d-flex justify-content-around align-items-center text-info p-2 bg-white text-uppercase">
              <h2 className="">Add Product</h2>
              <img
                style={{ width: "40px" }}
                className="rounded-circle"
                src={loggedInUser.image}
                alt=""
              />
            </div>
            <div className="row">
              <AddProductFrom />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddProduct;
