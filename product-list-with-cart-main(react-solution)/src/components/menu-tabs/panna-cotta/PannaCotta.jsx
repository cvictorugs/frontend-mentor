import React from 'react'
import './panna-cotta.css'
import PannaCottaDesktopImage from '../../../assets/images/image-panna-cotta-desktop.jpg'
import PannaCottaMobileImage from '../../../assets/images/image-panna-cotta-mobile.jpg'
import PannaCottaThumbnailImage from '../../../assets/images/image-panna-cotta-thumbnail.jpg'
import PannaCottaThumbnailTablet from '../../../assets/images/image-panna-cotta-tablet.jpg'
import CartImage from '../../../assets/images/icon-add-to-cart.svg'
  
const updateCart = () =>{
  alert('yoo')
}

const MenuTab = () => {
  return (
   <div className="food-tab-ctn">
      <div className='food-tab'>
         <div className='food-pic'>
            <img src={PannaCottaDesktopImage} alt="PannaCotta Image" />
         </div>
         <div id="panna-cotta-cart-btn-ctn" className="cart-button-ctn" >
            <button id="panna-cotta-cart-btn" className='cart-btn' onClick={updateCart} >
               <img  className='add-to-cart' src={CartImage} alt="Cart Image" />
               <p id="add-to-cart-text">Add to Cart</p>
            </button> 
         </div>
      </div>
      <div className="food-description">
        <div className="product-name grey-text">PannaCotta</div>
        <div className="md-text">Pistachio PannaCotta</div>
        <div className="md-text red-text" id='product-price'>$4.00</div>
      </div>
    </div>
  )
}
export default MenuTab
