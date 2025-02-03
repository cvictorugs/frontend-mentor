import React from 'react'
import './brownie.css'
import BrownieDesktopImage from '../../../assets/images/image-brownie-desktop.jpg'
import BrownieMobileImage from '../../../assets/images/image-brownie-mobile.jpg'
import BrownieThumbnailImage from '../../../assets/images/image-brownie-Thumbnail.jpg'
import CartImage from '../../../assets/images/icon-add-to-cart.svg'
  
const updateCart = () =>{
  alert('yoo')
}

const MenuTab = () => {
  return (
   <div className="food-tab-ctn">
      <div className='food-tab'>
         <div className='food-pic'>
            <img width={200} height={90} src={BrownieDesktopImage} alt="Brownie Image" />
         </div>
         <div id="brownie-cart-btn-ctn" className="cart-button-ctn" >
            <button id="brownie-cart-btn" className='cart-btn' onClick={updateCart} >
               <img  className='add-to-cart' src={CartImage} alt="Cart Image" />
               <p id="add-to-cart-text">Add to Cart</p>
            </button> 
         </div>
      </div>
      <div className="food-description">
        <div className="product-name grey-text">Brownie</div>
        <div className="md-text">Salted Caramel Brownie</div>
        <div className="md-text red-text" id='product-price'>$5.50</div>
      </div>
    </div>
  )
}
export default MenuTab
