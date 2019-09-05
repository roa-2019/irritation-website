import React from 'react'
import { getFruits, getAdvice } from '../apiClient'
// import Footer from './Footer'
import Main from './Main'
// import Nav from './Nav'

const App = () => {
  getAdvice()
    .then(advice => {
      alert(advice)
    })

  return (
    <div>
      {/* <Nav /> */}
      {/* <Main /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App 
