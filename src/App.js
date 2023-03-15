import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import Home from "./Components/pages/Home";
import BMI from "./Components/pages/BMI";
import Excerise from "./Components/pages/Excerise"
import Resources from "./Components/Pages/Resources";
import './App.css';


function App() {
  return (
        <Router>
    <div>

      {/* rendering the header to all the pages with the project */}
      <Header />
      {/* Wrap Route elements in a Routes component */}
      <Routes basename = "Health-4-Life/">
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/Health-4-Life/" element={<Home />} />
        {/* definie a default route that will render the BMI Component */}
        <Route path="/Health-4-Life/bmi" element={<BMI />} />
        {/* definie a default route that will render the Excerise Component */}
        <Route path="/Health-4-Life/excerise" element={<Excerise />} />
        {/* definie a default route that will render the Resources Component */}
        <Route path="/Health-4-Life/resources" element={<Resources />} />
      </Routes>
    </div>
  </Router>
);
}
  


export default App;
