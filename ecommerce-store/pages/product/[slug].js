// brackets indicate that this slug is dynamic -> uses file-based routing next.js feature

import React from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { client, urlFor } from "../../lib/client";

const ProductDetails = ({ product, products }) => {
  // We will make an API call to get specific slug to specify product data
  const { image, name, details, price } = product;
  return (
    <div>
      <div className="product-detail">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[0])} />
            {/* <div className="small-images-container">
                {image?.map((item, i) => (
                    <img
                    src={urlFor(item)}
                    className=""
                    onMouseEnter=""
                    />
                ))}

            </div> */}
          </div>
          <div className="product-details-desc">
            <h1>{name}</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>(20)</p>
            </div>
          </div>
          <h4>Details:</h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick="">
                <AiOutlineMinus />
              </span>
              <span className="num" onClick="">
                0
              </span>
              <span className="plus" onClick="">
                <AiOutlinePlus />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

//next is similar to graphQL, but simplified... this allows us to get current slug of product
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
        slug {
            current
        }
    }
    `;

  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

//function used to prerender page... data is avalible at build time ahead of user's request (data comes from headless CMS {sanity})
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`; // template string using ``
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  const bannerQuery = '*[_type == "banner"]'; // Reciving data from Sanity information inserted from mangement end
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      product,
    },
  };
};

export default ProductDetails;
