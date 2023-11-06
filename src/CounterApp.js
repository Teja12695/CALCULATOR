import React, { Component } from 'react'
import "./CounterApp.css"


export default class CounterApp extends Component {
    constructor(){
        super()
        this.state={
            counter:0,
            stock:10
        }
    }
  render() {
    return (
        <>
      <div className='Wrapper'>
        <h1>Counter App</h1>
        <div className='Wrap'>
        <button className='Minus' onClick={()=>{
            if(this.state.counter>0){
                this.setState({counter:this.state.counter-1})
            }
        }}>-</button>
        <p>{this.state.counter}</p>
        <button className='Plus' onClick={()=>{
            if(this.state.counter<this.state.stock){
                this.setState({counter:this.state.counter+1})
            }
        }}>+</button>
        </div>
      </div>
      </>
    )
   
  }
}
