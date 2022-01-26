import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from "./pages/Home/Contact/Contact";
import Home from "./pages/Home/Home";
import Appbar from "./pages/Shared/Appbar/Appbar";
import Login from "./pages/Login/Login/login";

function App() {
  return (
    <div className="">
      {/* <AuthProvider> */}
        <Router>
        <Appbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            {/* <Route path="/wishlist" element={<Wishlisht />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/login" element={<Login />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      {/* </AuthProvider> */}

      {/* <Appbar/> */}
      {/* <Home/>
      <Contact/> */}
    </div>
  );
}

export default App;
