import React, { useContext, useEffect, useState } from "react";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faGripHorizontal,
  faPlus,
  faShoppingBag,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const SideBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://agile-brook-68982.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return (
    <>
      <div className="sidebar">
        <ul className="list-unstyled">
          {isAdmin ? (
            <div>
              <li>
                <Link to="/orderList" className="text-white">
                  <FontAwesomeIcon icon={faShoppingBag} />
                  <span>Order List</span>
                </Link>
              </li>
              <li>
                <Link to="/addProduct" className="text-white">
                  <FontAwesomeIcon icon={faPlus} /> <span>Add Products</span>
                </Link>
              </li>
              <li>
                <Link to="/addAdmin" className="text-white">
                  <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                </Link>
              </li>
              <li>
                <Link to="/manageProduct" className="text-white">
                  <FontAwesomeIcon icon={faGripHorizontal} />
                  <span>Manage Product</span>
                </Link>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <Link to="/buyProduct/:id" className="text-white">
                  <FontAwesomeIcon icon={faCartPlus} />
                  <span>Booking Product</span>
                </Link>
              </li>
              <li>
                <Link to="/productList" className="text-white">
                  <FontAwesomeIcon icon={faShoppingBag} />
                  <span>Product List</span>
                </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
