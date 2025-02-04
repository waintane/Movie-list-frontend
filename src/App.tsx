import React from "react";
import "./style/style.scss";
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Movie from "./pages/Movie";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
      </Routes>
    </div>
  );
}

export default App;
