import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Bass from "./components/Bass";
import Drums from "./components/Drums";
import Vocals from "./components/Vocals";
import Guitar from "./components/Guitar";
import Parent from "./components/Parent";
import Error from "./components/Error";
import "./index.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Parent />
        <main className="main">
          <Routes>
            <Route path="/" element={<Vocals />} />
            <Route index path="vocals" element={<Vocals />} />
            <Route path="guitar" element={<Guitar />} />
            <Route path="bass" element={<Bass />} />
            <Route path="drums" element={<Drums />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <p>
          <Footer />
        </p>
      </BrowserRouter>
    </>
  );
}

export default App;
