import React from 'react'
import './waffles.css'
import WafflesImage from '../../../assets/images/image-waffle-desktop.jpg'
import CartImage from '../../../assets/images/icon-add-to-cart.svg'
  
const updateCart = () =>{
  alert('yoo')
}

const MenuTab = () => {
  return (
    <div className='food-tab-ctn'>
      <div className="food-tab">

        <div className='food-pic'>
          <img src={WafflesImage} alt="Waffles Image" />
        </div>
        <div id="waffles-cart-btn-ctn" className="cart-button-ctn" >
          <button id="waffles-cart-btn"  onClick={updateCart}>
            <img  className='add-to-cart' src={CartImage} alt="Cart Image" />
            <p id="add-to-cart-btn">Add to Cart</p>
          </button> 
        </div>
      </div>
      <div className="food-description">
        <p className='grey-text product-name'>Waffles</p>
        <p className='md-text'>Waffles with berries</p>
        <p className=' md-text red-text'>$6.50</p>
      </div>
    </div>

  )
}
export default MenuTab

// let foodArray = [
//   { foodName: 'waffles', foodDescription: 'Waffle with Berries', price: 6.50, amount: 0, foodPic: './assets/images/image-waffle-thumbnail.jpg' },
//   { foodName: 'creme-brulee', foodDescription: 'Vanilla Bean Creme Brulee', price: 7.00, amount: 0, foodPic: './assets/images/image-creme-brulee-thumbnail.jpg' },
//   { foodName: 'macaron', foodDescription: 'Macaron Mix of Five', price: 8.00, amount: 0, foodPic: './assets/images/image-macaron-thumbnail.jpg' },
//   { foodName: 'tiramisu', foodDescription: 'ClassNclassNameic Tiramisu', price: 5.50, amount: 0, foodPic: './assets/images/image-tiramisu-thumbnail.jpg' },
//   { foodName: 'baklava', foodDescription: 'Pistachio Baklava', price: 4.00, amount: 0, foodPic: './assets/images/image-baklava-thumbnail.jpg' },
//   { foodName: 'pie', foodDescription: 'Lemon Meringue Pie', price: 5.00, amount: 0, foodPic: './assets/images/image-meringue-thumbnail.jpg' },
//   { foodName: 'cake', foodDescription: 'Red Velvet Cake', price: 4.50, amount: 0, foodPic: './assets/images/image-cake-thumbnail.jpg' },
//   { foodName: 'brownie', foodDescription: 'Salted Caramel Brownie', price: 5.50, amount: 0, foodPic: './assets/images/image-brownie-thumbnail.jpg' },
//   { foodName: 'panna-corta', foodDescription: 'Vanilla Panna Corta', price: 6.50, amount: 0, foodPic: './assets/images/image-panna-cotta-thumbnail.jpg' }
// ];
