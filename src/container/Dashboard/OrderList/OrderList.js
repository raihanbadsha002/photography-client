import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Footer from "../../../components/Footer/Footer";
import StateNavBar from "../../../components/StateNavBar/StateNavBar";
import SideBar from "../../SideBar/SideBar";
import LoadingGif from "../../../images/spinner.gif";

const OrderList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    fetch(`https://agile-brook-68982.herokuapp.com/orderList`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setOrderDetails(data));
  }, []);

  const handleChange = (e) => {
    console.log("Status", e.target.value);
  };

  return (
    <>
      <StateNavBar />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-2 col-sm-6 col-12">
            <SideBar />
          </div>
          <div
            className="py-4 col-md-10 col-sm-12 col-12 bg-light"
            style={{ height: "97vh" }}
          >
            <div className="d-flex justify-content-around align-items-center text-info p-2 bg-white text-uppercase">
              <h2 className="">Order List</h2>
              <img
                style={{ width: "40px" }}
                className="rounded-circle"
                src={loggedInUser.image}
                alt=""
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-12  py-4">
                  <table className="table table-striped shadow rounded bg-white">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Product</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderDetails.length === 0 && (
                        <div
                          style={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%,-50%)",
                          }}
                        >
                          <img
                            style={{ width: "150px" }}
                            src={LoadingGif}
                            alt="LoadingGif"
                          />
                        </div>
                      )}

                      {orderDetails.map((od) => (
                        <>
                          <tr key={od._id}>
                            <td>{od.userName}</td>
                            <td>{od.email}</td>
                            <td>{od.ptitle}</td>
                            <td>{od.phone}</td>
                            <td>
                              <select
                                onChange={handleChange}
                                className="btn btn-info"
                              >
                                <option
                                  value="Pending"
                                  className="status_update"
                                >
                                  Pending
                                </option>
                                <option value="Done" className="status_update">
                                  Done
                                </option>
                                <option
                                  value="On going"
                                  className="status_update"
                                >
                                  On going
                                </option>
                              </select>
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderList;
