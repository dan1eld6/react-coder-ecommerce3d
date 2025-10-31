import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Footer from './components/Footer'
import Printers from './pages/Printers'
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartProvider } from './context/cartContext'
import Cart from './pages/Cart'
import {getPrinters} from './data/firebase'

function App() {
  console.log("Firebase app initialized:", getPrinters());


  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <div className="main-content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/servicios' element={<Servicios />} />
              <Route path='/impresoras/:categoryId?' element={<Printers />} />
              <Route path='/impresora/:id' element={<ItemDetailContainer />} />
              <Route path='/insumos' element={""} />
              <Route path='/carrito' element={<Cart/>} />
              <Route path='*' element={<h1>Error 404: Página no encontrada</h1>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App
