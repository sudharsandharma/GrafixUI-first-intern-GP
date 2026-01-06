import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchResults from "./pages/SearchResults";  

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./components/Cart/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Orders from "./pages/Orders";
import Payment from "./pages/payment";
import Restaurant from "./pages/Restaurant";

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
            <Route path="/restaurant/:id" element={<Restaurant />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/search" element={<SearchResults />} />

          </Routes>

          <Footer />
        </SearchProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
