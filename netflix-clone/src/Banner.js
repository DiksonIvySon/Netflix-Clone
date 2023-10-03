import React from 'react'
import "./Banner.css"
import netflixBanner from "./images/netflix-banner.webp"

function Banner() {
  return (
    <header className='banner'
    style={{backgroundSize: "cover",
            backgroundImage: `url(${netflixBanner})`,
            backgroundPosition: "center center",
    }}
    >
        <div className='banner-contents'>
            <h1 className='banner-title'>Movie Name</h1>
            <div className='banner-buttons'>
                <button className='banner-button'>Play</button>
                <button className='banner-button'>My List</button>
            </div>
            <h1 className='banner-description'>The coolest movie in this session</h1>
        </div>

        <div className='banner-fadeButton'></div>
    </header>
  )
}

export default Banner;