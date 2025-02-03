import React from 'react'
import './pie.css'
import PieDesktopImage from '../../../assets/images/image-meringue-desktop.jpg'
import PieMobileImage from '../../../assets/images/image-meringue-mobile.jpg'
import PieThumbnailImage from '../../../assets/images/image-meringue-thumbnail.jpg'
import PieThumbnailTablet from '../../../assets/images/image-meringue-tablet.jpg'
import CartImage from '../../../assets/images/icon-add-to-cart.svg'
  
const updateCart = () =>{
  alert('yoo')
}

const MenuTab = () => {
  return (
   <div className="food-tab-ctn">
      <div className='food-tab'>
         <div className='food-pic'>
            <img src={PieDesktopImage} alt="Pie Image" />
         </div>
         <div id="pie-cart-btn-ctn" className="cart-button-ctn" >
            <button id="pie-cart-btn" className='cart-btn' onClick={updateCart} >
               <img  className='add-to-cart' src={CartImage} alt="Cart Image" />
               <p id="add-to-cart-text">Add to Cart</p>
            </button> 
         </div>
      </div>
      <div className="food-description">
        <div className="product-name grey-text">Pie</div>
        <div className="md-text">Lemon Meringue Pie</div>
        <div className="md-text red-text" id='product-price'>$5.00</div>
      </div>
    </div>
  )
}
export default MenuTab
