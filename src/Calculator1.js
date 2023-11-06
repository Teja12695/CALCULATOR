//main screen
import "./Calculator.css"

import React, { useState } from 'react'
import Calculator2 from './Calculator2'

export default function Calculator1() {

  let [input,setinput] = useState("")


  function handleclick(value){
        setinput(input+value)
  }


  function result(value){
    let output = eval(input)
    setinput(output) 
  }

  function handleclear(){
    setinput(" ")
  }

  return (
    <div className='container'>
        <h1>Calculator app using react</h1>
        <div className='Calculator'>
            <input type='text' value={input} className='output'/>
            <Calculator2 handleclick={handleclick} result={result} handleclear={handleclear}/>
        </div>
    </div>
  )
}
