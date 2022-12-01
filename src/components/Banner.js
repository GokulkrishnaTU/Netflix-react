import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div className='banner' >
        <div className='content' >
            <h1 className='title'>Movie name</h1>
            <div className='banner_button'>
                <button className='button' >play</button>
                <button className='button' >my List</button>
            </div>
            <h1   className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia?</h1>
        </div>
        <div className='fade_bottom'></div>
     
    </div>
  )
}

export default Banner
