import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <Link to="/">MyMovieList</Link>
          <Link to="/films">films</Link>
        </div>
        <div>
          <SearchBar placeholder="recherche"></SearchBar>
          <Link to="/auth/connexion">Connexion</Link>
        </div>
      </nav>
    </header>
  );
}
