import './App.css'
import { Routes, Route } from 'react-router-dom'
import Advertisements from './components/NavBar/Anuncment/Advertisements'
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartProvider from './context/CartProvider'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer'




function App() {

  return (
    <CartProvider>
      <Advertisements />
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart/" element={<Cart />} />
        <Route path="/checkout/" element={<Checkout />} />
      </Routes>
      <Footer />
    </CartProvider>
  )
}

export default App