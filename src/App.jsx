import React from "react";
import ReactDOM from "react";
import Header from "./header";
import "../dist/css/stylesheet.css";
import ProductCard from "./Product-Card";


const arrOfObj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function App () {
  return(
    <>
    <Header />
    <div className="product">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
    </>
  )
}


export default App
