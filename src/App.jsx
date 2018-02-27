import React, { Component } from 'react'
import typeItem from './service'
import fetchJsonp from 'fetch-jsonp'
import './style.css'

import Input from './input'
import List from './list'
import Foot from './foot'
class App extends Component {
  constructor () {
    super()
    this.state = {
      keyword: '',
      tabIndex: 0,
      dataList: [],
      title: '书名、作者、ISBN'
    }
  }

  onChange (value) {
    this.setState({
      keyword: value
    })
    const index = this.state.tabIndex
    if (value) {
      this.loadData(index, value)
    }
  }
  onChangeIndex (index) {
    this.setState({
      tabIndex: index,
      keyword: ''
    })
    if (index === 0) {
      this.setState({
        title: '书名、作者、ISBN'
      })
    }
    if (index === 1) {
      this.setState({
        title: '电影、影人、影院、电视剧'
      })
    }
    if (index === 2) {
      this.setState({
        title: '唱片名、表演者、条码、ISRC'
      })
    }

    const keyword = ''
    this.loadData(index, keyword)
  }
  loadData (index, keyword) {
    if (index === 0) {
      let URL = typeItem.book_search + '?q=' + (keyword || 'all')
      console.log(URL)
      fetchJsonp(URL)
                .then((response) => {
                  return response.json()
                }).then((json) => {
                  console.log('parsed json', json.books)
                  this.setState({
                    dataList: json.books
                  })
                }).catch((ex) => {
                  console.log('parsing failed', ex)
                })
    }
    if (index === 1) {
      let URL = 'https://api.douban.com//v2/movie/top250' + '?q=' + (keyword || 'all')
      let URL1 = typeItem.movie_search + '?q=' + (keyword || 'all')
      URL = keyword ? URL1 : URL
      console.log(URL)
      fetchJsonp(URL)
                .then((response) => {
                  return response.json()
                }).then((json) => {
                  console.log('parsed json', json)
                  this.setState({
                    dataList: json.subjects
                  })
                }).catch((ex) => {
                  console.log('parsing failed', ex)
                })
    }
    if (index === 2) {
      let URL = typeItem.music_search + '?q=' + (keyword || 'all')
      console.log(URL)
      fetchJsonp(URL)
                .then((response) => {
                  return response.json()
                }).then((json) => {
                  console.log('parsed json', json)
                  this.setState({
                    dataList: json.musics
                  })
                }).catch((ex) => {
                  console.log('parsing failed', ex)
                })
    }
  }
  componentWillMount () {
    let URL = typeItem.book_search + '?q=all'
    console.log(URL)
    fetchJsonp(URL)
            .then((response) => {
              return response.json()
            }).then((json) => {
              console.log('parsed json', json)
              this.setState({
                dataList: json.books
              })
            }).catch((ex) => {
              console.log('parsing failed', ex)
            })
  }
  render () {
    const keyword = this.state.keyword
    const title = this.state.title
    let dataList = this.state.dataList
    return (
      <div className='app'>
        <div className='content'>
          <Input title={title} keyword={keyword} onChange={this.onChange.bind(this)} />
          <List dataList={dataList} />
        </div>
        <Foot onChangeIndex={this.onChangeIndex.bind(this)} />
      </div>
    )
  }
}

module.exports = App
