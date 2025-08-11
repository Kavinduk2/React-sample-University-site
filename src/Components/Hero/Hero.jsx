import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Inspiring minds to build a brighter future</h1>
            <p>Our mission-driven approach fosters transformative learning experiences that equip students with the tools, values, and vision to shape a more inclusive and innovative world.</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt='arrow'/></button>

        </div>
    </div>
  )
}

export default Hero
