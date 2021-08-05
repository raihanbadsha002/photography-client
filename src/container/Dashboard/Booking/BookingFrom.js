import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { UserContext } from "../../../App";

const BookingFrom = () => {
  const { id } = useParams();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [buyProductTitle, setBuyProductTitle] = useState({});
  const { ptitle, price, imageURL } = buyProductTitle;

  useEffect(() => {
    fetch(`https://agile-brook-68982.herokuapp.com/buyProduct/${id}`)
      .then((res) => res.json())
      .then((data) => setBuyProductTitle(data));
  }, [id]);

  const onSubmit = (data, e) => {
    e.target.reset();
    const bookingDetails = {
      ptitle: data.product,
      price: price,
      phone: data.phone,
      imageURL: imageURL,
      email: loggedInUser.email,
      userName: loggedInUser.name,
    };

    fetch("https://agile-brook-68982.herokuapp.com/productBooked", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(bookingDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Successfully Booked your Product");
        }
      });
  };

  return (
    <div className="col-md-6">
      <div className="ml-5 mt-5">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              defaultValue={loggedInUser.name}
              {...register("name", { required: true })}
              className="form-control py-2 my-2"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              defaultValue={loggedInUser.email}
              {...register("email", { required: true })}
              className="form-control py-2 my-2"
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              {...register("phone", { required: true })}
              className="form-control py-2 my-2"
              placeholder="Enter Phone Number"
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              defaultValue={ptitle}
              {...register("product", { required: true })}
              className="form-control py-2 my-2"
              placeholder="Enter Product name"
            />
            {errors.buyProduct && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group mx-3">
            <button type="submit" className="btn btn-success px-5 py-2">
              Submit
            </button>
          </div>
          <p className="mt-2">
            Your Product charged : <strong>${price}</strong>
          </p>
        </form>
      </div>
    </div>
  );
};

export default BookingFrom;
