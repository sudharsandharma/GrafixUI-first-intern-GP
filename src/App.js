import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/menu";
import Cart from "./components/Cart/Cart";
import OrderTracking from "./pages/OrderTracking";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Payment from "./pages/payment";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar/Navbar";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";



function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <SearchProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        
        <Route path="/track-order" element={<OrderTracking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      </SearchProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

