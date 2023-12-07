//import data from '../data/data.json'
import React, {Component} from 'react'
import Categories from '../components/Categories'
import Items from '../components/Items'
import ShowFullItem from '../components/ShowFullItem'



class Homepage extends Component {
   constructor(props){
    super(props)
    this.state={
        orders:[],
        items:[],
        currentItems:[],
        showFullItem:false,
        fullItem:{}
     
    }

    this.state.items= this.props.items
    this.state.orders=this.props.orders
    //data.cars
    this.state.currentItems=this.state.items
    this.addToOrder=this.addToOrder.bind(this)
   // this.deleteOrder=this.deleteOrder.bind(this)
    this.chooseCategory=this.chooseCategory.bind(this)
    this.onShowItem=this.onShowItem.bind(this)
  
 }
  render() {
  return(
    <>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
  </>
  )
}
 

onShowItem(item){
  this.setState({fullItem:item})
  this.setState({showFullItem: !this.state.showFullItem})
}

chooseCategory(category){
  if(category==='all'){
    this.setState({
      currentItems: this.state.items
    })
    return
  }

  this.setState({
    currentItems: this.state.items.filter(el=> el.category===category)
  })
}



addToOrder(item){
  this.state.orders=this.props.orders
  let isInArray=false
  this.state.orders.forEach(el=>{
    if (el.id === item.id)
      isInArray = true
  })
  if (!isInArray){
     this.setState({orders: [...this.state.orders, item]})
     this.props.updateOrders([...this.state.orders, item])
  }
 }

}


export default Homepage