import React from "react";

const Home = () => {
  return (
    <>
      HeroBanner
      <div>
        <h2>All Products</h2>
        <p>Fun creations we make on a regular basis</p>
      </div>
      <div>{["Prodcut 1", "Product 2"].map((product) => product)}</div>
      Footer
    </>
  );
};

export default Home;
