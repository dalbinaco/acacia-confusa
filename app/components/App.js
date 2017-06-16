import React, { PropTypes } from 'react'
import Acacia from './Acacia'

class App extends React.Component{
  render () {
    return (
      <div>
        <header className="pt-5 pb-3">
          <div className="container">
            <h1><em>Acacia confusa</em></h1>
          </div>
        </header>
        {this.props.children}
      </div>
    )
  }
}

export default App
