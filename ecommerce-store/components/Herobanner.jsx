import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

function Herobanner({ heroBanner }) { //<--  inputing data pulled from sanity database
  return (
    <div className='hero-banner-container'>
        <div>
            <p className = "disney-princess">{heroBanner.smallText}</p>
            <h3>{heroBanner.midText}</h3>
            <h1>{heroBanner.largeText1}</h1>
            <img src ={urlFor(heroBanner.image)} alt ="pinata" className="hero-banner-image" />
        </div>
        <div>
            {/* Calling product specified in database , also look to get rid of ID?*/}
            <Link href={`/product/${heroBanner.product}`}> 
                <button type="button">{heroBanner.buttonText}</button>
            </Link>
            <div className='desc'>
                <h5>Description</h5>
                <p>{heroBanner.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default Herobanner