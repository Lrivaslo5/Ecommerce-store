import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const Footerbanner = ({ footerBanner}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{footerBanner.discount}</p>
          <h3>{footerBanner.largeText1}</h3>
          <h3>{footerBanner.largeText2}</h3>
          <p>{footerBanner.saleTime}</p> 
        </div>
        <div className="right">
          <p>{footerBanner.smallText}</p>
          <h3>{footerBanner.midText}</h3>
          <p>{footerBanner.desc}</p>
          <Link href={`/product/${footerBanner.product}`}>
            <button type="button">{footerBanner.buttonText}             
            </button>
          </Link>
          <img
            src={urlFor(footerBanner.image)} className="footer-banner-image"
          />
        </div>
      </div>
    </div>
  )
}

export default Footerbanner

// : {discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image}