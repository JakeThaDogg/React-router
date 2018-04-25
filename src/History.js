import React from 'react'

class History extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      color: 'black'
    }
  }
  render () {
    return (
      <p> Notre histoire </p>
    )
  }
}

export default History
