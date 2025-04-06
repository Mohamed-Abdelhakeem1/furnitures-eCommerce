import { Route, Routes } from "react-router-dom";
import NavBar from "./Layout/NavBar";
import Home from "./Routes/Home";
import Shop from "./Routes/Shop";
import Cart from "./Routes/Cart";
import Wishlist from "./Routes/Wishlist";
import Footer from "./Layout/Footer";
import ModalReview from "./Common/ModalReview";

function App() {
  return (
    <>
      <NavBar />
      <ModalReview />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/furnitures-eCommerce" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
