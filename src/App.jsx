import React, { Component } from 'react'
import Fooditem from './components/Food-item'
import './App.css'
import Title from './components/Title'
import menu from "../../resources/data";
 class App extends Component {
  render() {
    return (
      <div className='all-container'>
      <Title/>

      <div className='foods-container'>
      {
        menu.map((obj, index)=>{
          return <Fooditem key={index} obj = {obj}/>
        })
      }
      </div>
      
      </div>
    )
  }
}

export default App
