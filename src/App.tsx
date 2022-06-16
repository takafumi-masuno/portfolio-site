import { Route, Routes } from "react-router-dom";
import { Box } from "rebass";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Trial from "./components/Trial/Trial";
import { TrialGoogleMap } from "./components/Trial/TrialGoogleMap";
import TrialThreeJs from "./components/Trial/TrialThreeJs";
import ScrollUp from "./utils/ScrollUp";

const App = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/trial" element={<Trial />} />
          <Route path="/trial/1" element={<TrialThreeJs />} />
          <Route path="/trial/2" element={<TrialGoogleMap />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <ScrollUp />
      </Box>
    </>
  );
};

export default App;
