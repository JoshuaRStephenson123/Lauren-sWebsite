import React from "react";
import ReactDOM from "react";
import Header from "./header";
import "../dist/css/stylesheet.css";
import ProductCard from "./Product-Card";
import Footer from "./Footer";

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
    </div>
    <footer>
      <Footer />
    </footer>
    </>
  )
}


export default App
