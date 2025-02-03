import React from 'react'
import './creme-brulee.css'
import CremeBruleeDesktopImage from '../../../assets/images/image-creme-brulee-desktop.jpg'
import CremeBruleeMobileImage from '../../../assets/images/image-creme-brulee-mobile.jpg'
import CremeBruleeThumbnailImage from '../../../assets/images/image-creme-brulee-Thumbnail.jpg'
import CartImage from '../../../assets/images/icon-add-to-cart.svg'
  
const updateCart = () =>{
  alert('yoo')
}

const MenuTab = () => {
  return (
   <div className="food-tab-ctn">
      <div className='food-tab'>
         <div className='food-pic'>
            <img src={CremeBruleeDesktopImage} alt="Cake Image" />
         </div>
         <div id="creme-brulee-cart-btn-ctn" className="cart-button-ctn" >
            <button id="creme-brulee-cart-btn" className='cart-btn' onClick={updateCart} >
               <img  className='add-to-cart' src={CartImage} alt="Cart Image" />
               <p id="add-to-cart-text">Add to Cart</p>
            </button> 
         </div>
      </div>
      <div className="food-description">
        <div className="product-name grey-text">Creme Brulee</div>
        <div className="md-text">Vanilla Creme Brulee</div>
        <div className="md-text red-text" id='product-price'>$7.00</div>
      </div>
    </div>
  )
}
export default MenuTab
