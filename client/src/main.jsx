import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React, { createContext } from 'react'
import UserStore from '../store/UserStore.js'

export const Context = createContext(null)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context.Provider value={{
    user: new UserStore()
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>,
)
