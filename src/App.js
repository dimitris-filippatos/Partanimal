import Nav from "./Nav";
import "./App.css"
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./Home";
import Festivals from "./Festivals";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fest" element={<Festivals />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
