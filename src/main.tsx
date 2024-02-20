import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Fix animation bugs from Reanimated, when clicking on animated item twice FAST
// Probably can be removed after new Tamagui version
globalThis['global'] = globalThis

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
