import React, { useContext } from "react";
import { UserContext } from "../../../App";
import Footer from "../../../components/Footer/Footer";
import StateNavBar from "../../../components/StateNavBar/StateNavBar";
import SideBar from "../../SideBar/SideBar";
import BookingFrom from "./BookingFrom";

const Booking = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
              <h2 className="">Book</h2>
              <img
                style={{ width: "40px" }}
                className="rounded-circle"
                src={loggedInUser.image}
                alt=""
              />
            </div>
            <div className="row">
              <BookingFrom />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Booking;
