import React, { Component } from 'react'

export default class CardProduct extends Component {



  render() {
    let {product} = this.props;
    return (
      <div className="card mb-5">
      <img className="card-img-top" src={product.image} alt />
      <div className="card-body">
        <h4 style={{height: '55px'}} className="card-title">{product.name}</h4>
        <p className="card-text">{product.price} $</p>
        <button className="bg-dark text-white">Add to carts<span class="fas fa-shopping-cart"></span> </button>
      </div>
    </div> 
    )
  }
}

