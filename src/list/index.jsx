import React, { Component } from 'react'
import './list.css'

import Item from '../item'

class List extends Component {
  render () {
    const dataList = this.props.dataList
    return (
      <div className='list'>
        {
            dataList.map((item, index) => <Item item={item} key={index} />)
                }
      </div>
    )
  }
}

export default List
