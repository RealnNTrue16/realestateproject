import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import PageNotFound from "../NotFound/NotFound";

function App() {
  return (
    <div className="page">
      <Header />
      <nav>
        <NavLink to="/about" />
        <NavLink to="/contact" />
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
