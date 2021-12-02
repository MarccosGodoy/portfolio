import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Knowledge from "./pages/knowledge/Knowledge";
import Shoesecommerce from "./pages/shoesEcommerce/Shoesecommerce";
import Fbot from "./pages/fbot/Fbot";
import Gitgud from "./pages/gitgud/Gitgud";
import Recipe from "./pages/recipe/Recipe";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/knowledge" element={<Knowledge/>} />
          <Route path="/shoesEcommerce" element={<Shoesecommerce/>} />
          <Route path="/fbot" element={<Fbot/>} />
          <Route path="/gitgud" element={<Gitgud/>} />
          <Route path="/recipe" element={<Recipe/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
