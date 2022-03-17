import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Trial from "./components/Trial";
import ScrollUp from "./utils/ScrollUp";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/trial" element={<Trial />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <ScrollUp />
      </div>
    </>
  );
};

export default App;
