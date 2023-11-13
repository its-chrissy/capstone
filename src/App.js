import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Header from "./component/Header/Header";

function App() {
  return (
    <main className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
