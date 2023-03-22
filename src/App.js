import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import Home from "./Components/Pages/Home";
import BMI from "./Components/Pages/BMI";
import Exercise from "./Components/Pages/Exercise";
import Nutrient from "./Components/Pages/Nutrient";
import Resources from "./Components/Pages/Resources";
import './App.css';


function App() {
  return (
    <Router>
      <div>

        {/* rendering the header to all the pages with the project */}
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes >
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          {/* definie a default route that will render the About Component */}
          <Route path="/BMI" element={<BMI />} />
          {/* definie a default route that will render the Exercise Component */}
          <Route path="/Exercise" element={<Exercise />} />
           {/* definie a default route that will render the Nutrient Component */}
           <Route path="/Nutrient" element={<Nutrient />} />
          {/* definie a default route that will render the Resource Component */}
          <Route path="/Resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
