import React from 'react'
import '../empty-cart/empty-cart.css'
// import styled from "styled-components"
// console.log(styled)
import EmptyCartImage from '../../../assets/images/illustration-empty-cart.svg'

const EmptyCart = () => {
  return (
    <>
      
      <div id="empty-cart-ctn">
        <div className='empty-cart-img-ctn'>
          <img id='empty-cart-img' src={EmptyCartImage} alt="Empty Cart Illustration" />
        </div>
        <div className='empty-cart-description sm-text'>Your added items will display here</div>
      </div>
    </>
    )
    
}

export default EmptyCart