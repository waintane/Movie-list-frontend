import React from "react";
import "./style/style.scss";
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Movie from "./pages/Movie";
import Signup from "./pages/Signup";
import SignIn from "./pages/Signin";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
        <Route path="/auth/signup" element={<Signup />}></Route>
        <Route path="/auth/signin" element={<SignIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
