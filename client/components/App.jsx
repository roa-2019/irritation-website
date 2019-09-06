import React from 'react'
import getAdvice from '../apiClient'
// import Footer from './Footer'
import Main from './Main'
import Nav from './Nav'
import Popup from './Form';  
import Showpopup from './Showpopup'



const App = () => {
  giveAdvice()
  return ( 
  <div>

    <Nav />
    {/* <Popup /> */}
  
    <Showpopup />
    {/* <Main /> */}
    
  </div>
  )
  }

function giveAdvice () {
  getAdvice().then(result => {
    alert(result)
  }) 

  setTimeout(giveAdvice, 30000)
}


export default App 
