import { Route, Routes } from "react-router-dom";
import NavBar from "./Layout/NavBar";
import Home from "./Routes/Home";
import Shop from "./Routes/Shop";
import Cart from "./Routes/Cart";
import Wishlist from "./Routes/Wishlist";
import Footer from "./Layout/Footer";
import ModalReview from "./Common/ModalReview";
import NotFound from "./Routes/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <ModalReview />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
