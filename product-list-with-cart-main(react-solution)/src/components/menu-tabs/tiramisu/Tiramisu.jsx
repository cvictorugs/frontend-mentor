import React from 'react'
import './tiramisu.css'
import TiramisuDesktopImage from '../../../assets/images/image-tiramisu-desktop.jpg'
import TiramisuMobileImage from '../../../assets/images/image-tiramisu-mobile.jpg'
import TiramisuThumbnailImage from '../../../assets/images/image-tiramisu-Thumbnail.jpg'
import CartImage from '../../../assets/images/icon-add-to-cart.svg'
  
const updateCart = () =>{
  alert('yoo')
}

const MenuTab = () => {
  return (
   <div className="food-tab-ctn">
      <div className='food-tab'>
         <div className='food-pic'>
            <img src={TiramisuDesktopImage} alt="Macaron Image" />
         </div>
         <div id="tiramisu-cart-btn-ctn" className="cart-button-ctn" >
            <button id="tiramisu-cart-btn" className='cart-btn' onClick={updateCart} >
               <img  className='add-to-cart' src={CartImage} alt="Cart Image" />
               <p id="add-to-cart-text">Add to Cart</p>
            </button> 
         </div>
      </div>
      <div className="food-description">
        <div className="product-name grey-text">Tiramisu</div>
        <div className="md-text">Tiramisu Mix of Five</div>
        <div className="md-text red-text" id='product-price'>$8.00</div>
      </div>
    </div>
  )
}
export default MenuTab
