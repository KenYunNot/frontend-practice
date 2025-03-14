import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import CardHover from './components/CardHover'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/card-hover' element={<CardHover />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
