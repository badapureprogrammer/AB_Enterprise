import React, { useEffect, useState } from "react";
import { Card, Button} from "react-bootstrap";
import axios from "axios";
import FooterComponent from "./Footer";

const NewsComponent = () => {

  const [news, setNews] = useState([]);

  useEffect(()=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=7df864ed35d44bb39cd605cb8cc05d8a")
    .then((response) => {
      // console.log(response.data.articles);
      setNews(response.data.articles);
    })
    .catch((error) => {
      console.log(error);
    });
  },[])
  
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="text-center mt-4">TOP TRENDING NEWS</h2>
          {news.map((data) => {
            return (
              <div className="col-md-4 col-sm-12  my-5 d-flex justify-content-center" key={data.url}>
                <Card style={{ width: "22rem"}} >
                  <Card.Img variant="top" src={data.urlToImage} style={{height:"14rem"}} />                  
                  <Card.Body>
                    <Card.Title>{data.title?data.title.slice(0,62):""}</Card.Title>
                    <Card.Text>{data.description?data.description.slice(0,120):""}...</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                  <p><small className="text-muted">By <strong> {!data.author ? "Unknown":data.author}</strong> <br/> on {new Date(data.publishedAt).toGMTString()}</small></p>
                  <Button variant="dark" href={data.url} target="_blank">Read More</Button>
                  </Card.Footer>
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
export default NewsComponent;
