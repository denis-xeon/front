import React, { useState } from 'react'
import {FaCartShopping} from 'react-icons/fa6'
import Order from './Order'
import {GiCarWheel} from 'react-icons/gi'
import {NavLink, Link} from 'react-router-dom'

const showOrders = (props) => {
  let summa=0
  props.orders.forEach(el => summa += Number.parseFloat(el.price));
  return(
    <div>
    {props.orders.map(el => (
    <Order onDelete={props.onDelete} key={el.id} item={el} />
  ))}
  <p className='summa'>Разом: {new Intl.NumberFormat().format(summa)} грн</p>
  </div>
  )
}

const showNoting = () =>{
  return(<div className='empty'>
    <h2>Корзина порожня</h2>
  </div>)
}


export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  
  return (
    <header>
        <div>
            <span className="logo"><Link to={'/'}><GiCarWheel /> HotWheelsShop</Link> </span>
            <ul className='nav'>
            <li><NavLink to={'/paymentanddelivery'}>Оплата і доставка</NavLink></li>
            <li><NavLink to={'/about'}>Про нас</NavLink></li>
            <li><NavLink to={'/contacts'}>Контакти</NavLink></li>
            </ul>

            <FaCartShopping onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ?
                showOrders(props) : showNoting()}
              </div>
            )}
        </div>

        <div className="presentation"></div>
        
    </header>
  )
  
  
}
