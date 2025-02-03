import React from 'react'
import './macaron.css'
import MacaronDesktopImage from '../../../assets/images/image-macaron-desktop.jpg'
import MacaronMobileImage from '../../../assets/images/image-macaron-mobile.jpg'
import MacaronThumbnailImage from '../../../assets/images/image-macaron-Thumbnail.jpg'
import CartImage from '../../../assets/images/icon-add-to-cart.svg'
  
const updateCart = () =>{
  alert('yoo')
}

const MenuTab = () => {
  return (
   <div className="food-tab-ctn">
      <div className='food-tab'>
         <div className='food-pic'>
            <img src={MacaronDesktopImage} alt="Macaron Image" />
         </div>
         <div id="macaron-cart-btn-ctn" className="cart-button-ctn" >
            <button id="macaron-cart-btn" className='cart-btn' onClick={updateCart} >
               <img  className='add-to-cart' src={CartImage} alt="Cart Image" />
               <p id="add-to-cart-text">Add to Cart</p>
            </button> 
         </div>
      </div>
      <div className="food-description">
        <div className="product-name grey-text">Macaron</div>
        <div className="md-text">Macaron Mix of Five</div>
        <div className="md-text red-text" id='product-price'>$8.00</div>
      </div>
    </div>
  )
}
export default MenuTab
