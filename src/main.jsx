import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import PizzaContextProvider from "./context/PizzaContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzaContextProvider>
        <App />
      </PizzaContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
