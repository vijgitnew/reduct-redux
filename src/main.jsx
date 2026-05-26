import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home.jsx'
import Cart from './components/Pages/Cart.jsx'
import MainLayout from './components/Common/MainLayout.jsx'
import 'react-toastify/dist/ReactToastify.css'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
    <Route element={<MainLayout />}>
     <Route path="/" element={<Home />} />
     <Route path="/cart" element={<Cart />} />
     </Route>
    </Routes>
    </BrowserRouter>
)
