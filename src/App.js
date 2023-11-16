import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Homepage from "./pages/Home/Homepage";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import AboutPage from "./pages/About/Aboutpage";
import Toronto from "./pages/Toronto/Toronto";
import Miami from "./pages/Miami/Miami";
import Newyork from "./pages/NewYork/Newyork";

function App() {
  return (
    <main className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/toronto" element={<Toronto />} />
          <Route path="/newyork" element={<Newyork />} />
          <Route path="/miami" element={<Miami />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
