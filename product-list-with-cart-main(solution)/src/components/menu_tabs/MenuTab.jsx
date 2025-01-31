import React from 'react'
import './menu-tab.css'
import  waffleImage from '../../assets/images/image-waffle-desktop.jpg'
import  addToCart from '../../assets/images/icon-add-to-cart.svg'

export default function Menu() {
  return (
    <div className='food-menu-container'>
     
      <div className="item-1">
        <div className="food-pic">
          <img className='waffle-image' src={waffleImage}/> 
        </div>
        <div className="cart-button">
          <img className='add-to-cart' src={addToCart} alt="" />
          <p>Add to Cart</p>
        </div>
        <div className="description"> 
          <p className='grey-text sm-text'>Waffle</p>
          <p className='md-text'>Waffle with Berries</p>
          <p className="price sm-text">$6.50</p>
        </div>
      </div>
     
     
    </div>
  )
    

    

}
