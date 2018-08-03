import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import './index.css'

// for React Router to work properly, you need to wrap your whole app in a BrowserRouter component
ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>, document.getElementById('root')
)
