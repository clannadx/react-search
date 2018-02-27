import React, { Component } from 'react'

import './foot.css'

class Foot extends Component {
  constructor () {
    super()
    this.state = {
      tabIndex: 0
    }
  }
  handleChange (index) {
    this.setState({
      tabIndex: index
    })
    console.log(index)
    this.props.onChangeIndex(index)
  }
  checkTitleIndex (index) {
    return index === this.state.tabIndex ? 'f-item active' : 'f-item'
  }
  render () {
    let title = ['图书', '电影', '音乐']
        // console.log(this.props.tabIndex)

    return (
      <div className='foot'>
        {
                    title.map((item, index) => {
                      return <div key={index} className={this.checkTitleIndex(index)} onClick={this.handleChange.bind(this, index)}>{item}</div>
                    })
                }
      </div>
    )
  }
}

export default Foot
