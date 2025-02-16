import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import { AuthContext } from "./context/AuthProvider";
import removeLocalStorage from "./scripts/removeLocalStorage";

export default function Header() {
  const auth = useContext(AuthContext);

  if (!auth) throw new Error("AuthContext must be used within an AuthProvider");
  const [name, setName] = useState<string | null>();

  useEffect(() => {
    const fetchUserName = async () => {
      setName(auth.user);
    };
    fetchUserName();
  }, [auth]);

  return (
    <header>
      <nav>
        <div>
          <h1>
            {" "}
            <Link to="/">MyMovieList</Link>
          </h1>
          <Link to="/films">films</Link>
        </div>
        <div>
          <SearchBar placeholder="recherche"></SearchBar>
          {name === null ? (
            <Link to="/auth/signin" className="fancy-button">
              Connexion
            </Link>
          ) : (
            <div>
              <Link to="/profil/me" className="fancy-button">
                {name}
              </Link>
              <button
                className="fancy-button"
                onClick={() => {
                  removeLocalStorage("user");
                  window.location.reload();
                }}
              >
                Déconnexion
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
