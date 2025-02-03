import React from 'react'
import './cake.css'
import CakeDesktopImage from '../../../assets/images/image-cake-desktop.jpg'
import CakeMobileImage from '../../../assets/images/image-cake-mobile.jpg'
import CakeThumbnailImage from '../../../assets/images/image-cake-Thumbnail.jpg'
import CartImage from '../../../assets/images/icon-add-to-cart.svg'
  
const updateCart = () =>{
  alert('yoo')
}

const MenuTab = () => {
  return (
   <div className="food-tab-ctn">
      <div className='food-tab'>
         <div className='food-pic'>
            <img width={200} height={90} src={CakeDesktopImage} alt="Cake Image" />
         </div>
         <div id="cake-cart-btn-ctn" className="cart-button-ctn" >
            <button id="cake-cart-btn" className='cart-btn' onClick={updateCart} >
               <img  className='add-to-cart' src={CartImage} alt="Cart Image" />
               <p id="add-to-cart-text">Add to Cart</p>
            </button> 
         </div>
      </div>
      <div className="food-description">
        <div className="product-name grey-text">Cake</div>
        <div className="md-text">Red Velvet Cake</div>
        <div className="md-text red-text" id='product-price'>$4.50</div>
      </div>
    </div>
  )
}
export default MenuTab
