import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import AboutPage from "./pages/About/Aboutpage";
import Toronto from "./pages/Toronto/Toronto";

function App() {
  return (
    <main className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/toronto" element={<Toronto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
