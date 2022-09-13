import "./App.css";
import React, { useState } from "react";

import Navbar from "./container/components/Navbar";
import HomeComponent from "./container/components/Home";
import ProductComponent from "./container/components/Product";
import SelectedProduct from "./container/components/SelectedProduct";
import NewsComponent from "./container/components/News";
import LoginComponent from "./container/components/Login";
import ErrorComponent from "./container/components/Error";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {


  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<HomeComponent />}></Route>
          <Route path="/product" exact element={<ProductComponent />}></Route>
          <Route path="/cart/:id" exact element={<SelectedProduct/>}></Route>
          <Route path="/news" exact element={<NewsComponent />}></Route>
          <Route path="/login" exact element={<LoginComponent />}></Route>
          <Route path="*" element={<ErrorComponent />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
