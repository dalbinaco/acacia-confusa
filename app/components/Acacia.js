import React, { PropTypes } from 'react'
import update from 'immutability-helper'

const newBranch = {
  code: '',
  description: '',
  note: '',
  focus: true
}
class Acacia extends React.Component{
  constructor () {
    super ()
    this.handleChange = this.handleChange.bind(this)
    this.theTree = this.theTree.bind(this)
    this.addBranch = this.addBranch.bind(this)
    this.toggleFocus = this.toggleFocus.bind(this)
    this.state = {
      acacia: [

      ]
    }
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
  addBranch () {
    let state = this.state.acacia
    state = update(state, {$push: [newBranch]})
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
  handleSubmit (index, e) {
    e.preventDefault
    this.toggleFocus(index)
    console.log(this.state.acacia[index] == newBranch)
  }
  theTree () {
    const tree = this.state.acacia.map( (branch, index) =>
    branch.focus ? (
      <li className="list-group-item flex-column align-items-start" key={index}>
        <form  className="mb-3" onSubmit={(e) => this.handleSubmit(index, e)}>
          <div className="form-group">
            <label>Code</label>
            <input name="code" className="form-control mb-1" type="text" value={this.state.acacia[index].code} onChange={(e) => this.handleChange(index, e)} required/>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input name="description" className="form-control mb-1" type="text" value={this.state.acacia[index].description} onChange={(e) => this.handleChange(index, e)} required/>
          </div>
          <div className="form-group">
            <label>Note</label>
            <input name="note" className="form-control" type="text" value={this.state.acacia[index].note} onChange={(e) => this.handleChange(index, e)}/>
          </div>
          <button type="submit" className="btn btn-primary">
            Done
          </button>
        </form>

        <div className="btn btn-secondary" onClick={this.addBranch}>+ New child branch</div>
      </li>
    ) : (
      <li onClick={() => this.toggleFocus(index)} key={index} className="list-group-item">
        {branch.description}
      </li>
    ) )
    return (
      <div>
        <button className="btn btn-primary mb-3" onClick={this.addBranch}>+ New branch</button>
        <ul className="list-group">
          {tree}
        </ul>
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
