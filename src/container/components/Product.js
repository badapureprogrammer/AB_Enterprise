import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ProductData from "./SampleProduct";
import { AddItem } from "../../state/actionCreator/action";
import FooterComponent from "./Footer";

import "./cssPages/Product.css";

const ProductComponent = () => {

  const [product, setProduct] = useState(ProductData);
  // console.log(product);

  const dispatch = useDispatch();
  const takeOrder = (e) => {
    console.log(e);
    dispatch(AddItem(e));
  };

  return (
    <>
      <div className="container">
      <h2 className="text-center mt-4"> RESTAURANTS DISHES</h2>
        <div className="row">
          {product.map((Productitem, index) => {
            return (
              <div className="col-md-4 col-sm-12 pb-4 d-flex justify-content-center">
                <Card
                  className="selectProduct my-3"
                  style={{ height: "29rem", width: "25rem", border: "none" }}
                  key={Productitem.id}
                >
                  <Card.Img
                    style={{ height: "18rem" }}
                    variant="top"
                    src={Productitem.imgdata}
                  />
                  <Card.Body>
                    <Card.Title>{Productitem.address}</Card.Title>
                    <Card.Text>₹ {Productitem.price}</Card.Text>
                    <div className="d-flex justify-content-center">
                      <Button
                        onClick={() => takeOrder(Productitem)}
                        variant="primary"
                        className="col-lg-12"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <FooterComponent />
    </>
  );
};
export default ProductComponent;