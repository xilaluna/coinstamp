import React from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import Home from "./pages/Home/Home"
import Rates from "./pages/Rates/Rates"
import Cart from "./pages/Cart/Cart"
import Order from "./pages/Order/Order"
import Create from "./pages/Create/Create"

import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getCart } from "./redux/slices/cartSlice"

const App = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  if (cart.status === "idle") {
    dispatch(getCart())
  }
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="rates" element={<Rates />} />
        <Route path="cart" element={<Cart />} />
        <Route path="order" element={<Order />} />
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App
