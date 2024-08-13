import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Details from "./components/Details.jsx";
import Cart from "./components/Cart.jsx";
import Main from "./pages/Main.jsx";
import CheckoutPage from "./components/CheckoutPage.jsx";
import ConfirmPage from "./components/ConfirmPage.jsx";

function App() {
  return (
    <Router basename="/Figma_to_code_challenge--ballamas">
      <div className="min-h-screen w-full flex flex-col items-center justify-between gap-12 bg-white">
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmPage" element={<ConfirmPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
