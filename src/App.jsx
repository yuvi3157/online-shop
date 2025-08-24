import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Shop } from "./pages/Shop";
import { ScrollToTop } from "./components/ScrollTop";
import { Cart } from "./pages/Cart";
import { ProductDetails } from './pages/ProductDetails';
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Add ScrollToTop logic here */}
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/product/:productId" element={<ProductDetails />} /> {/* Route for product details */}

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
