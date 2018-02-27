import React, { Component } from 'react'
import './show.css'
class Show extends Component {
  hide () {
    this.props.changeShow()
  }
  render () {
    let show = this.props.show
    let dataList = this.props.dataList
    let show1 = show ? ' show' : ''
    let tags = dataList.genres ? dataList.genres : []
    let time = dataList.pubdate ? '' : 'hide'
    return (
      <div className={'datashow' + show1} >
        <div className='header'>
          <div className='left'>
            <span onClick={this.hide.bind(this)} />
          </div>
          {dataList.title}
        </div>
        <div className='show-item'>
          <div className='list-item'>
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
        </div>
        <div className='foreword'><span>前言：</span>{dataList.catalog ? dataList.catalog.substr(0, 200) : ''}</div>
        <div className='foreword'><span>简介：</span>{dataList.summary ? dataList.summary.substr(0, 200) : ''}</div>
      </div>
    )
  }
}

export default Show
