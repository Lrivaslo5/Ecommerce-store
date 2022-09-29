import React from "react";

import { client } from "../lib/client";
import { Product, Footerbanner, Herobanner } from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <Herobanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
      <div className="products-heading">
        <h2>All Products</h2>
        <p>Fun creations we make on a regular basis</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <Footerbanner footerBanner={bannerData && bannerData[0]} />
      {/* If banner data exists */}
    </div>
  );
};
//used whenever fetching data from api
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]'; // Reciving data from Sanity information inserted from mangement end
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};
export default Home;
