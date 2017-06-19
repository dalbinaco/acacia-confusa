import React, { PropTypes } from 'react'
import GrowBranch from './GrowBranch'

class Branch extends React.Component{
  render () {
    const branch = this.props.focus ? (
      <li className="list-group-item flex-column align-items-start" key={this.props.index}>
        <form  className="mb-3" onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <label>Code</label>
            <input name="code" className="form-control mb-1" type="text" value={this.props.code} onChange={this.props.handleChange} required/>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input name="description" className="form-control mb-1" type="text" value={this.props.description} onChange={this.props.handleChange} required/>
          </div>
          <div className="form-group">
            <label>Note</label>
            <input name="note" className="form-control" type="text" value={this.props.note} onChange={this.props.handleChange}/>
          </div>
          <button type="submit" className="btn btn-primary" formNoValidate>
            Done
          </button>
        </form>
        <div className="btn btn-secondary" onClick={() => this.props.addBranch(this.props.index)}>+ New child branch</div>
      </li>
    ) : (
      <li key={this.props.index} className="list-group-item d-flex justify-content-between">
        <div className="pr-3"><i className="material-icons cursor-pointer" onClick={this.props.toggleExpand}>keyboard_arrow_down</i></div>
        <div style={{flex: 1}}>{this.props.description}</div>
        <div><i className="material-icons cursor-pointer pl-3" onClick={() => this.props.addBranch(this.props.index)}>playlist_add</i></div>
        <div><i className="material-icons cursor-pointer pl-3" onClick={this.props.toggleFocus}>edit</i></div>
        <div className="w-100"></div>
        <div className={this.props.expanded ? null : 'd-none'}><GrowBranch acacia={this.props.children}/></div>
      </li>
    )
    return branch
  }
}

export default Branch
