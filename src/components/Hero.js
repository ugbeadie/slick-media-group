import React from 'react'
import hero from '../images/Rectangle 5.png'

const Hero = () => {
  return (
    <>
        <div className="hero">
            <img src={hero} alt="hero-img" />
            <p>Watch something incredible</p>
        </div>
    </>
  )
}

export default Hero
