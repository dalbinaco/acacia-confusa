import React, { PropTypes } from 'react'
import update from 'immutability-helper'

const newBranch = {
  focus: true,
  expanded: false,
  code: '',
  description: '',
  note: '',
  parent: ''
}
class Acacia extends React.Component{
  constructor () {
    super ()
    this.handleChange = this.handleChange.bind(this)
    this.theTree = this.theTree.bind(this)
    this.addBranch = this.addBranch.bind(this)
    this.toggleFocus = this.toggleFocus.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
  addBranch (parent) {
    let state = this.state.acacia
    state = update(state, {$push: [newBranch]})
    console.log(parent)
    if (typeof parent === 'number') {
      state[state.length - 1].parent = parent
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
          <button type="submit" className="btn btn-primary" formNoValidate>
            Done
          </button>
        </form>
        <div className="btn btn-secondary" onClick={this.addBranch}>+ New child branch</div>
        {
          for (let i = 0; i < this.state.acacia.length; i++) {
            this.state.acacia[i].parent == index ? (
              <li className="list-group-item d-flex justify-content-between">
                <div className="pr-3"><i className="material-icons cursor-pointer" onClick={() => this.toggleExpand(i)}>keyboard_arrow_down</i></div>
                <div style={{flex: 1}}>{branch.description}</div>
                <div><i className="material-icons cursor-pointer pl-3" onClick={() => this.addBranch(i)}>playlist_add</i></div>
                <div><i className="material-icons cursor-pointer pl-3" onClick={() => this.toggleFocus(i)}>edit</i></div>
              </li>
            )
          }
        }
      </li>
    ) : branch.parent === '' ? (
      <li key={index} className="list-group-item d-flex justify-content-between">
        <div className="pr-3"><i className="material-icons cursor-pointer" onClick={() => this.toggleExpand(index)}>keyboard_arrow_down</i></div>
        <div style={{flex: 1}}>{branch.description}</div>
        <div><i className="material-icons cursor-pointer pl-3" onClick={() => this.addBranch(index)}>playlist_add</i></div>
        <div><i className="material-icons cursor-pointer pl-3" onClick={() => this.toggleFocus(index)}>edit</i></div>
      </li>
    ) : null )
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
