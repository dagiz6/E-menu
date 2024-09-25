import React, { Component } from 'react'
class Fooditem extends Component {
  render() {
    let {img, title, price, desc} = this.props.obj
    return (
      <div class="single-food">
      <div class="img">
        <img
          src={img}
        />
      </div>
      <div class="title-price">
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
      <div class="food-desc">
           {desc.substring(0,250)} ...
          </div>
      </div>
    )
  }
}
export default Fooditem