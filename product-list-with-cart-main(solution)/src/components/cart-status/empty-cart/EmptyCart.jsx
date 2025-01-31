import React from 'react'
import '../empty-cart/empty-cart.css'
import EmptyCartImage from '../../../assets/images/illustration-empty-cart.svg'

const EmptyCart = () => {
  return (
    <div className='empty-cart-img-ctn'>
        <img id='empty-cart-img' src={EmptyCartImage} alt="Empty Cart Illustration" />
    </div>
  )
}

export default EmptyCart