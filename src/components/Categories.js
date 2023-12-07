import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всі'
                },
                {
                    key: 'standart',
                    name: 'Стандарт'
                },
                {
                    key: 'premium',
                    name: 'Преміум'
                },
                {
                    key: 'ff',
                    name: 'Форсаж'
                },

            ]        }
    }

  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el=>(
            <div key={el.key} onClick={()=>this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories