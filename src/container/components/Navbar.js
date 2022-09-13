import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { Badge, Menu } from "@mui/material";
import { Link } from "react-router-dom";
import { RemoveItem } from "../../state/actionCreator/action";
import EmtyCart_img from "../images/cart-emty.gif";

import "./cssPages/Product.css";

const Navbar = (props) => {
  const getProductData = useSelector(
    (state) => state.CartReducerAction.cartsData
  );
  // console.log(getProductData)

  const [price, setPrice] = useState(0);
  // console.log(price)

  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(RemoveItem(id));
  };

  const total = () => {
    let price = 0;
    getProductData.map((ele, i) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            AB Enterprise
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/news">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/login">
                  Login
                </Link>
              </li>
            </ul>
            <Badge
              badgeContent={getProductData.length}
              color="primary"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <i
                className="fa-solid fa-cart-shopping text-light mt-1 mx-2"
                style={{ fontSize: 18, cursor: "pointer" }}
              ></i>
            </Badge>
          </div>
        </div>
      </nav>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        {getProductData.length ? (
          <div style={{ width: "24rem", padding: "10px" }}>
            <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Restaurant Name</th>
                </tr>
              </thead>
              <tbody>
                {getProductData.map((e) => {
                  return (
                    <>
                      <tr>
                        <td>
                          <Link to={`/cart/${e.id}`} onClick={handleClose}>
                            <img
                              style={{ width: "150px", height: "105px" }}
                              src={e.imgdata}
                            />
                          </Link>
                        </td>
                        <td>
                          <p>{e.rname}</p>
                          <p>Price : ₹{e.price}</p>
                          <p>Quantity: {e.qnty}</p>
                          {/* <p><i className="fa-solid fa-trash-can smalltrash" onClick={()=>{deleteItem(e.id)}} style={{color:"red",fontSize:20,cursor:"pointer"}}></i></p> */}
                        </td>
                        <td
                          className="mt-5"
                          style={{
                            color: "red",
                            fontSize: 20,
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            deleteItem(e.id);
                          }}
                        >
                          <i className="fa-solid fa-trash-can largetrash"></i>
                        </td>
                      </tr>
                    </>
                  );
                })}
                <p className="text-center">Total : ₹{price}</p>
              </tbody>
            </Table>
          </div>
        ) : (
          <div className="cart_short">
            <i
              className="fa-solid fa-xmark smallclose"
              onClick={handleClose}
              style={{ cursor: "pointer" }}
            ></i>
            <p>Your Cart is Empty</p>
            <img src={EmtyCart_img} />
          </div>
        )}
      </Menu>
    </>
  );
};
export default Navbar;
