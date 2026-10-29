
import Home from './pages/Home'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import '../css/App.css' // because App.jsx exists in same directory as index.css
import { MovieProvider } from './contexts/MovieContext'
function App() {

  return (
    <MovieProvider>
      <NavBar />
  <main className='main-content'>
    <Routes>
      <Route path= "/" element= {<Home />} />
      <Route path= "/favorites" element= {<Favorites />}/>
    </Routes>
    
    
  </main>
  </MovieProvider>

  )
}
export default App
