import React from 'react'

import { getFruits, getAdvice } from '../apiClient'

class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {
    getFruits()
      .then(fruits => {
        this.setState({fruits})
      })
    getAdvice()
      .then(advice => {
        alert(advice)
      })
  }

  render () {
    return (
      <div className='app'>
        <h1>Fullstack Boilerplate</h1>
        <ul>
          {this.state.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
