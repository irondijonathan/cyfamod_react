import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"

//Js scripts for animations
import "./../src/js/scripts.js"
import "./../src/js/cs.js"
import "./../src/js/plugins.js"
import "./../src/js/map.js"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
