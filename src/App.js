import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./component/Footer";

import Home from "./pages/Home";
import Menu from "./pages/menu";
import Cart from "./pages/cart";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* Footer visible on all pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
