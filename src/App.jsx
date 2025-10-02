import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Footer from './components/Footer'
import Printers from './pages/Printers'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/servicios' element={<Servicios />} />
            <Route path='/impresoras/:categoryId?' element={<Printers />} />
            <Route path='/impresora/:id' element={<ItemDetailContainer />} />
            <Route path='/insumos' element={""} />
            <Route path='/carrito' element={""} />
            <Route path='*' element={<h1>Error 404: Página no encontrada</h1>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
