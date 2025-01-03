import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage"
import HeroSectionsPage from "./pages/HeroSectionsPage";
import NavbarsPage from "./pages/NavbarsPage";
import AnimatedCardsPage from "./pages/AnimatedCardsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() { 
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hero-sections" element={<HeroSectionsPage />} />
          <Route path="/navbars" element={<NavbarsPage />} />
          <Route path="/animated-cards" element={<AnimatedCardsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
