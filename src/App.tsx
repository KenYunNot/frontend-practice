import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import CardHover from './components/CardHover'
import Home from './components/Home'
import Navbar from './components/Navbar'
import MoveWithScroll from './components/MoveWithScroll'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/card-hover' element={<CardHover />} />
          <Route path='/move-with-scroll' element={<MoveWithScroll />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
