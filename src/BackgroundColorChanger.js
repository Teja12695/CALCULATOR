import React from 'react'
import "./BackgroundColorChanger.css"


function BackgroundColorChanger() {
  return (
    <div className='Wrapper'>
      <h1>change the background color </h1>
      <input type='color' onChange={(e)=>{
        document.body.style.backgroundColor = e.target.value
      }}/>
    </div>
  )
}

export default BackgroundColorChanger
