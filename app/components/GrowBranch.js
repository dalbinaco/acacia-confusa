import React, { PropTypes } from 'react'
import update from 'immutability-helper'
import Branch from './Branch'

const newBranch = {
  focus: true,
  expanded: false,
  code: '',
  description: '',
  note: '',
  children: []
}
class GrowBranch extends React.Component{
  constructor (props) {
    super (props)
    this.handleChange = this.handleChange.bind(this)
    this.addBranch = this.addBranch.bind(this)
    this.toggleFocus = this.toggleFocus.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      acacia: props.acacia
    }
  }
  componentWillReceiveProps(props) {
    this.setState({
      acacia: props.acacia
    })
  }
  handleChange (index, e) {
    const target = e.target
    const value = target.value
    const name = target.name
    let state = this.state.acacia
    state[index] = update(state[index], {$merge: {[name]: value}})
    this.setState({
      acacia: state
    })
  }
  addBranch (parent) {
    let state = this.state.acacia
    console.log(parent)
    if (typeof parent === 'number') {
      state[parent].children = update(state[parent].children, {$push: [newBranch]})
    } else {
      state = update(state, {$push: [newBranch]})
    }
    this.setState({
      acacia: state
    })
  }
  toggleFocus (index) {
    let state = this.state.acacia
    state[index].focus = !state[index].focus
    this.setState({
      acacia: state
    })
  }
  toggleExpand (index) {
    let state = this.state.acacia
    state[index].expanded = !state[index].expanded
    this.setState({
      acacia: state
    })
  }
  handleSubmit (index, e) {
    e.preventDefault()
    let state = this.state.acacia
    if (this.state.acacia[index] == newBranch) {
      state = update(state, {$splice: [[index]]})
      this.setState({
        acacia: state
      })
    } else this.toggleFocus(index)
  }
  grow () {
    const tree = this.state.acacia.map( (branch, index) =>
      <Branch
        code={branch.code}
        description={branch.description}
        note={branch.note}
        index={index}
        key={index}
        children={branch.children}
        focus={branch.focus}
        expanded={branch.expanded}
        handleSubmit={(e) => this.handleSubmit(index, e)}
        handleChange={(e) => this.handleChange(index, e)}
        addBranch={this.addBranch}
        toggleFocus={() => this.toggleFocus(index)}
        toggleExpand={() => this.toggleExpand(index)}
        /> )
      return tree
    }
    render () {
      return (
        <div>
          {this.props.topLevel ? <button className="btn btn-primary mb-3" onClick={this.addBranch}>+ New branch</button> : null}
          <ul className="list-group">
            {this.grow()}
          </ul>
        </div>
      )
    }
  }

  export default GrowBranch
