import React, { Component } from 'react'

import './input.css'
class Input extends Component {
  constructor () {
    super()
    this.state = {
      value: ''
    }
  }
  componentDidUpdate () {
    this.input.value = this.state.value
  }
  searchClick () {
    const value = this.input.value
    this.props.onChange(value)
  }
  render () {
    this.state.value = this.props.keyword
    return (
      <div className='input-container'>
        <input type='text' className='form-control' ref={(input) => { this.input = input }} placeholder={this.props.title} />
        <button onClick={this.searchClick.bind(this)}>搜索</button>
      </div>
    )
  }
}

export default Input
