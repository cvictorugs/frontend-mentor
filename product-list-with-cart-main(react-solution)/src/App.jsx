import './App.css'
import Waffles from './components/menu-tabs/waffles/Waffles'
import EmptyCart from './components/cart-status/empty-cart/EmptyCart'

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
        <h1>Dessert</h1>
        <div className="basket">
          <Waffles/> <Waffles/>
          <Waffles/> <Waffles/>
          <Waffles/> <Waffles/>
          <Waffles/> <Waffles/>
          <Waffles/>
        </div>
      </div>
      <div className="right-ctn">
        <div className="cart-status-ctn">
          <div id="cart-quantity">
            <h3>Your Cart(0)</h3>
          </div>
          <EmptyCart/>

        </div>
      </div>
        
        
        
    </>
  )
}

export default App
