import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ManageProductData = ({ product, fetchProductList }) => {
  const deleteItem = (id) => {
    fetch(`https://agile-brook-68982.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => fetchProductList());
  };

  return (
    <>
      <tr>
        <td>{product.ptitle}</td>
        <td>${product.price}</td>
        <td>
          <span
            style={{ cursor: "pointer" }}
            className="bg-success text-white p-1"
          >
            <FontAwesomeIcon icon={faEdit} />
          </span>
          <span
            className="bg-danger text-white p-1 ml-2"
            style={{ cursor: "pointer" }}
            onClick={() => deleteItem(product._id)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </span>
        </td>
      </tr>
    </>
  );
};

export default ManageProductData;
