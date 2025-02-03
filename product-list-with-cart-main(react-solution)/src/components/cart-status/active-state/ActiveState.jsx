import React from 'react'
import './active-state.css'
import RemoveItemIcon from '../../../assets/images/icon-remove-item.svg'
import CarbonNeutralImage from '../../../assets/images/icon-carbon-neutral.svg' 

const ActiveState = () => {

  const removeItemIcon = () => {
    console.log('active')
    alert('active')
  }
  return (
    <div>
      <div id='active-state-ctn'>
        <div className="sub-ctn">
          <div className='div-1'>
            <div className='food-name'>
              <b>Classic Tiramisu</b>
            </div>
            <div className='food-details'>
              <div className="amount">1 <span className="red-text">X</span></div>
              <div className="lighter-grey-text">@$5.50</div>
              <div className="light-grey-text">$5.50</div>
            </div>  
          </div>  
            <button type='button' onClick={removeItemIcon}>
              <img src={RemoveItemIcon} alt="Remove Item Icon"/>
            </button>
        </div>
          {/*  */}
        <div className="order-total-ctn">
          <div className='light-grey-text'>Order Total</div>
          <div className='lg-text'><b>$<span id="order-total">46.50</span></b></div>
        </div>
        {/*  */}
        <div className="carbon-neutral-ctn">
          <img src={CarbonNeutralImage} alt="" />
          <div>This is <span>carbon-neutral</span>delivery</div>
        </div>
      </div>
    </div>
  )
}

export default ActiveState