import data from './data/data.json'
import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import  Layout  from './components/Layout'
import Homepage from './pages/Homepage'
import {Aboutpage} from './pages/Aboutpage'
import Contacts from './pages/Contacts'
import Paymentanddelivery from './pages/Paymentanddelivery'



function App(){
    const [items, setItems] = useState(data.cars)
    const [orders, setData] = useState([])

    const updateOrders = (value)=>{setData(value)}
    
    
    const deleteOrder=(id)=>{
     let ords=orders.filter(el => el.id !== id)
      setData(ords) 
     }

    return (
        <div className='wrapper'>
            <Routes>
                <Route  path='/' element={<Layout orders={orders} updateOrders={updateOrders} deleteOrder={deleteOrder}/>}>
                    <Route index element={<Homepage items={items} orders={orders} updateOrders={updateOrders} />} />
                    <Route path='/about' element={<Aboutpage/>} />
                    <Route path='/contacts' element={<Contacts/>} />
                    <Route path='/paymentanddelivery' element={<Paymentanddelivery/>} />
                </Route>
            </Routes>
        </div>
      )
}
export default App