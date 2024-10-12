import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DarkRoundedButton from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(

  <StrictMode >
    <DarkRoundedButton />
  </StrictMode>,
)
