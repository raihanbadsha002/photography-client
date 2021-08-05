import React from "react";

const ProductListCard = ({ bList }) => {
  return (
    <div className="col-sm-4">
      <div className="card shadow-lg rounded">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <img style={{ width: "80px" }} src={bList.imageURL} alt="" />
            <button className="btn btn-secondary">Pending</button>
          </div>
          <h5 className="card-title">{bList.ptitle}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductListCard;
