import React from "react"
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

class Layout extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            orders:[],
          }

          this.state.orders=this.props.orders
     }
    render(){
    return(
        <>
       <Header orders={this.props.orders} onDelete={this.props.deleteOrder} updateOrders={this.props.updateOrders} />
        <div className="wrappep">

       <Outlet /> 
       </div>
       <Footer />
       </>
    )
}

 

 
}

export default Layout