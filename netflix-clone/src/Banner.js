import React from 'react'
import "./Banner.css"
import netflixBanner from "./images/netflix-banner.webp"

function Banner() {

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

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
            <h1 className='banner-description'>
                {truncate(`The coolest movie in this session The coolest movie in this session
                The coolest movie in this session The coolest movie in this session`,150)}    
            </h1>
        </div>

        <div className='banner-fadeButton'></div>
    </header>
  )
}

export default Banner;