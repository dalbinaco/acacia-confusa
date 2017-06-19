import React, { PropTypes } from 'react'
import update from 'immutability-helper'
import GrowBranch from './GrowBranch'
import Branch from './Branch'

class Acacia extends React.Component{
  theTree () {
    return (
      <div>
        <GrowBranch acacia={[]} topLevel />
      </div>
    )
  }
  render () {
    return (
      <div>
        <div className="container">
          {this.theTree()}
        </div>
      </div>
    )
  }
}

export default Acacia
