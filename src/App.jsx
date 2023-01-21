import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes, Link } from "react-router-dom";
import './App.css'
import TeoremaPitagoras from './views/TeoremaPitagoras';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<TeoremaPitagoras />}/>
    </Routes>
  )
}

export default App
