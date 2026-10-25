
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BookProvider } from "./context/BookContext";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import "./App.css";

function App() {
  return (
    <BookProvider>
      <BrowserRouter>
        <nav className="navbar">
          <Link to="/">Daftar Buku</Link>
          <Link to="/stats">Statistik</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </BrowserRouter>
    </BookProvider>
  );
}

export default App;
