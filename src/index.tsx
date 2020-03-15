import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import { BrowserRouter } from 'react-router-dom'
import App from './app'

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
