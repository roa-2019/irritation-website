import React from 'react'
import { getFruits, getAdvice } from '../apiClient'
// import Footer from './Footer'
import Main from './Main'
import Nav from './Nav'
import Popup from './Form';  
import Showpopup from './Showpopup'



const App = () => ( 
   
  <div>

    <Nav />
    {/* <Popup /> */}
    <div class="content"> 
    <Showpopup />
    </div>
    {/* <Main /> */}

  </div>

)


export default App 
