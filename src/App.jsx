import React from 'react'
import {Home, Contact, Services, Blog} from "./pages"
import './App.css'
import {Routes, Route} from "react-router-dom"

//Js scripts for animations
import "./../src/js/scripts.js"
import "./../src/js/cs.js"
import "./../src/js/plugins.js"
import "./../src/js/map.js"



function App() {
  

  return (
    <React.Fragment>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </React.Fragment>


    
  )
}

export default App
