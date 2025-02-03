import './App.css'
import EmptyCart from './components/cart-status/empty-cart/EmptyCart'
import ActiveState from './components/cart-status/active-state/ActiveState'

import Waffles from './components/menu-tabs/waffles/Waffles'
import Baklava from './components/menu-tabs/baklava/Baklava'
import Cake from './components/menu-tabs/cake/Cake'
import CremeBrulee from './components/menu-tabs/creme-brulee/CremeBrulee'
import Macaron from './components/menu-tabs/macaron/Macaron'
import Tiramisu from './components/menu-tabs/tiramisu/Tiramisu'
import Pie from './components/menu-tabs/pie/Pie'
import Brownie from './components/menu-tabs/brownie/Brownie'
import PannaCotta from './components/menu-tabs/panna-cotta/PannaCotta'



let foodArray = [
  { foodName: 'waffles', foodDescription: 'Waffle with Berries', price: 6.50, amount: 0, foodPic: './assets/images/image-waffle-thumbnail.jpg' },
  { foodName: 'creme-brulee', foodDescription: 'Vanilla Bean Creme Brulee', price: 7.00, amount: 0, foodPic: './assets/images/image-creme-brulee-thumbnail.jpg' },
  { foodName: 'macaron', foodDescription: 'Macaron Mix of Five', price: 8.00, amount: 0, foodPic: './assets/images/image-macaron-thumbnail.jpg' },
  { foodName: 'tiramisu', foodDescription: 'Classic Tiramisu', price: 5.50, amount: 0, foodPic: './assets/images/image-tiramisu-thumbnail.jpg' },
  { foodName: 'baklava', foodDescription: 'Pistachio Baklava', price: 4.00, amount: 0, foodPic: './assets/images/image-baklava-thumbnail.jpg' },
  { foodName: 'pie', foodDescription: 'Lemon Meringue Pie', price: 5.00, amount: 0, foodPic: './assets/images/image-meringue-thumbnail.jpg' },
  { foodName: 'cake', foodDescription: 'Red Velvet Cake', price: 4.50, amount: 0, foodPic: './assets/images/image-cake-thumbnail.jpg' },
  { foodName: 'brownie', foodDescription: 'Salted Caramel Brownie', price: 5.50, amount: 0, foodPic: './assets/images/image-brownie-thumbnail.jpg' },
  { foodName: 'panna-corta', foodDescription: 'Vanilla Panna Corta', price: 6.50, amount: 0, foodPic: './assets/images/image-panna-cotta-thumbnail.jpg' }
];

function App() {
  return (
    <>
      <div className="left-ctn">
        <h1>Desserts</h1>
        <div className="basket">
          <Waffles/>
          <CremeBrulee/>
          <Macaron/>
          <Tiramisu/>
          <Baklava/>
          <Pie/>
          <Cake/>
          <Brownie/>
          <PannaCotta/>
        </div>
      </div>
      <div className="right-ctn">
        <div className="sub-div">
          <div >
            <h2>Your Cart (<span id="cart-quantity">0</span>)</h2>
          </div>
          <div className="cart-status-ctn">
            {/* <EmptyCart/> */}
            <ActiveState/>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
