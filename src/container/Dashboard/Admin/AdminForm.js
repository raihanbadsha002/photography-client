import React from "react";
import { useForm } from "react-hook-form";

const AdminForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();

    const AdminEmail = {
      email: data.email,
      pass: data.pass,
    };
    const url = `https://agile-brook-68982.herokuapp.com/addAdmin`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(AdminEmail),
    }).then((res) => alert("Admin Added Successfully"));
  };
  return (
    <div className="col-md-6">
      <div className="ml-4 mt-3 bg-white shadow rounded p-4">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter admin email..."
              className="form-control py-2"
            />
            {errors.email && (
              <span className="text-danger">Your Name is required</span>
            )}
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              {...register("pass", { required: true })}
              placeholder="Enter admin password..."
              className="form-control py-2"
            />
            {errors.pass && (
              <span className="text-danger">Password is required</span>
            )}
          </div>
          <div className="form-group my-3">
            <button type="submit" className="btn btn-info px-5 py-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminForm;
