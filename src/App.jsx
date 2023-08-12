import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Favorites from './pages/Favorites'
import Games from './pages/Games'
import Contact from './pages/Contact'
import Nav from './components/Nav'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  return (
    <>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/games' element={<Games />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </>
  )
}

export default App
