import React, { Component } from 'react'
import './item.css'
import Show from '../show'

class Item extends Component {
  constructor () {
    super()
    this.state = {
      show: false,
      dataList: ''
    }
  }
  showItem () {
    const dataList = this.props.item
    this.setState({
      show: !this.state.show,
      dataList: dataList
    })
  }
  changeShow () {
    this.setState({
      show: !this.state.show
    })
  }
  render () {
    const dataList = this.props.item
    const show = this.state.show
    let time = dataList.pubdate ? '' : 'hide'
    let tags = dataList.genres ? dataList.genres : []
    return (
      <div>
        <div className='list-item' onClick={this.showItem.bind(this)}>
          <div className='pic'>
            <img src={dataList.image ? dataList.image : dataList.images.small} alt='' />
          </div>
          <ul className='items'>
            <li className='title'>名称：{dataList.title}</li>
            <li className='tags'>
              {tags.map((item, i) => <span key={i}>{item}</span>)}
            </li>
            <li className={'author'}>作者：{dataList.attrs ? dataList.attrs.singer : dataList.author}</li>
            <li>评分：{dataList.rating.average}</li>
            <li className={time}>时间：{dataList.pubdate ? dataList.pubdate : ''}</li>
            <li>发行：{dataList.attrs ? dataList.attrs.publisher : dataList.publisher}</li>
            <li>价格：{dataList.price}</li>
          </ul>

        </div>
        <Show show={show} dataList={dataList} changeShow={this.changeShow.bind(this)} />
      </div>
    )
  }
}

export default Item
