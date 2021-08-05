import { createContext, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./container/Login/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./container/Home/Home";
import AddProduct from "./container/Dashboard/AddProduct/AddProduct";
import ViewMore from "./container/ViewMore/ViewMore";
import Admin from "./container/Dashboard/Admin/Admin";
import Booking from "./container/Dashboard/Booking/Booking";
import PrivateRoute from "./container/Login/PrivateRoute/PrivateRoute";
import ProductList from "./container/Dashboard/ProductList/ProductList";
import OrderList from "./container/Dashboard/OrderList/OrderList";
import ManageProduct from "./container/Dashboard/ManageProduct/ManageProduct";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addAdmin">
            <Admin />
          </Route>
          <Route path="/orderList">
            <OrderList />
          </Route>
          <Route path="/productList">
            <ProductList />
          </Route>
          <Route path="/addProduct">
            <AddProduct />
          </Route>
          <Route path="/manageProduct">
            <ManageProduct />
          </Route>
          <Route path="/viewMore/:id">
            <ViewMore />
          </Route>
          <PrivateRoute path="/buyProduct/:id">
            <Booking />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
