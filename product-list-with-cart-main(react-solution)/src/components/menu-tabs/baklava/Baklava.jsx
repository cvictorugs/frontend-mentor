import React from 'react'
import './baklava.css'
import BaklavaDesktopImage from '../../../assets/images/image-baklava-desktop.jpg'
import BaklavaMobileImage from '../../../assets/images/image-baklava-mobile.jpg'
import BaklavaThumbnailImage from '../../../assets/images/image-baklava-Thumbnail.jpg'
import CartImage from '../../../assets/images/icon-add-to-cart.svg'
  
const updateCart = () =>{
  alert('yoo')
}

const MenuTab = () => {
  return (
   <div className="food-tab-ctn">
      <div className='food-tab'>
         <div className='food-pic'>
            <img src={BaklavaDesktopImage} alt="Baklava Image" />
         </div>
         <div id="baklava-cart-btn-ctn" className="cart-button-ctn" >
            <button id="baklava-cart-btn" className='cart-btn' onClick={updateCart} >
               <img  className='add-to-cart' src={CartImage} alt="Cart Image" />
               <p id="add-to-cart-text">Add to Cart</p>
            </button> 
         </div>
      </div>
      <div className="food-description">
        <div className="product-name grey-text">Baklava</div>
        <div className="md-text">Pistachio Baklava</div>
        <div className="md-text red-text" id='product-price'>$4.00</div>
      </div>
    </div>
  )
}
export default MenuTab
