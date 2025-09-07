import { useState } from 'react'
import Header from './Header/Header'
import BodyMain from './Body/BodyMain'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Register from './Body/RegisterPage/Register'
import Entry from './Body/EntryPage/Entry'
import { CartProvider } from './Crops/Cart/CartContext'
import  CartPage  from './Crops/Cart/CartPage'


import './App.css'
import { ImageOutlined } from '@mui/icons-material'

function App() {
  return (
    <CartProvider>
      <Router>
        <div id='main-container'>
          <Header />
          <Routes>
            <Route path="/" element={<BodyMain />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Entry />} />
            <Route path="/bag" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}


export default App
