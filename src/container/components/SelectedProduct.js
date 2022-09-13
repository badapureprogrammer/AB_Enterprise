import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RemoveItem, AddItem, RemoveIndividual_Item} from "../../state/actionCreator/action";

import "./cssPages/Product.css";

const SelectedProduct = () => {

  const [data, setData] = useState([]);
  // console.log(data);

  const { id } = useParams();
  // console.log(id);

  const history = useNavigate();

  const getProductData = useSelector(
    (state) => state.CartReducerAction.cartsData
  );
  // console.log(getProductData)

  const dispatch = useDispatch();

  const selectProduct = () => {
    let comparedData = getProductData.filter((e) => {
      return e.id == id;
    });
    setData(comparedData);
  };

  const takeOrder = (e) => {
    console.log(e);
    dispatch(AddItem(e));
  };

  const deleteItem = (id) => {
    dispatch(RemoveItem(id));
    history("/product");
  };

  // Remove One
  const individual_Remove = (item) => {
    dispatch(RemoveIndividual_Item(item));
  };

  useEffect(() => {
    selectProduct();
  }, [id]);

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center my-5">This is Your Selected Dishes</h2>
        <section className="container my-4">
          <div className="itemBucket d-flex">
            {data.map((item) => {
              return (
                <div className="d-flex">
                  <div className="mx-3 py-3">
                    <img src={item.imgdata} />
                  </div>
                  <div className="mx-3">
                    <Table>
                      <thead>
                        <tr className="d-flex">
                          <td className="mx-3 py-4">
                            <p>
                              <strong>Restaurant</strong> : {item.rname}Massala
                              Theory
                            </p>
                            <p>
                              <strong>Price</strong> : ₹ {item.price}
                            </p>
                            <p>
                              <strong>Dishes</strong> : {item.address}
                            </p>
                            <p>
                              <strong>Total</strong> : ₹{" "}
                              {item.price * item.qnty}
                            </p>
                            <div className="itemController">
                            <span style={{ fontSize: 16 }} onClick={ item.qnty <= 1 ? () => deleteItem(item.id): () => individual_Remove(item)}>
                                <i className="fa-solid fa-minus"></i>
                              </span>
 
                              <span
                                style={{ fontSize: 15, fontWeight: "bold" }}
                              >
                                {item.qnty}
                              </span>
                              <span style={{ fontSize: 16 }} onClick={() => {takeOrder(item);}}>
                                <i className="fa-solid fa-plus"></i>
                              </span>
                            </div>
                          </td>
                          <td className="mx-3 py-4">
                            <p>
                              <strong>Rating</strong> :
                              <span
                                style={{
                                  backgroundColor: "green",
                                  color: "#fff",
                                  padding: "1px 6px",
                                  borderRadius: "5px",
                                  textAlign: "center",
                                }}
                              >
                                {item.rating} ★
                              </span>
                            </p>
                            <p>
                              <strong>Order Review</strong> :
                              <span> {item.somedata}</span>
                            </p>
                            <p>
                              <strong>Remove</strong> :
                              <span>
                                <i
                                  className="fa-solid fa-trash-can"
                                  onClick={() => {
                                    deleteItem(item.id);
                                  }}
                                  style={{
                                    color: "red",
                                    fontSize: 20,
                                    cursor: "pointer",
                                  }}
                                ></i>
                              </span>
                            </p>
                          </td>
                        </tr>
                      </thead>
                    </Table>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};
export default SelectedProduct;