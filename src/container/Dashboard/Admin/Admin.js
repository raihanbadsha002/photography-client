import React from "react";
import Footer from "../../../components/Footer/Footer";
import StateNavBar from "../../../components/StateNavBar/StateNavBar";
import SideBar from "../../SideBar/SideBar";
import AdminForm from "./AdminForm";

const Admin = () => {
  return (
    <>
      <StateNavBar />
      <section className="container">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
            <SideBar />
          </div>
          <div className="py-4 col-lg-10 col-md-8 col-sm-12 col-12 bg-light  add__blog">
            <div className="d-flex justify-content-around align-items-center text-info p-2 bg-white text-uppercase">
              <h2 className="">Admin</h2>
            </div>
            <div className="row">
              <AdminForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Admin;
