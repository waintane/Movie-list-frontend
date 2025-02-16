import { FormEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FetchAuthSignin from "../../db/FetchAuthSignin";
import { AuthContext } from "../../context/AuthProvider";
import setLocalStorage from "../../scripts/setLocalStorage";

export default function SignInForm() {
  const navigate = useNavigate();

  const auth = useContext(AuthContext);
  if (!auth) throw new Error("AuthContext must be used within an AuthProvider");
  const { setUser, setAccessToken } = auth;

  const [formError, setFormError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (checkFormFormat() === true) return;

    const succeded = await FetchAuthSignin(email, password);
    setUser(succeded.firstName);
    setAccessToken(succeded.access_token);
    setLocalStorage("user", succeded, 7200000);
    navigate(`/`);
  }

  function checkFormFormat() {
    if (!email || !password) {
      setFormError(true);
      return true;
    }

    if (!email.includes("@")) {
      setFormError(true);
      return true;
    }

    setFormError(false);
    return false;
  }

  return (
    <div className="auth-form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <section>
          <label htmlFor="email">Courriel :</label>
          <input
            type="text"
            id="email"
            className="auth-input"
            value={email}
            placeholder="Courriel..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="confirm-password">Prénom :</label>
          <input
            type="password"
            id="confirm-password"
            className="auth-input"
            value={password}
            placeholder="Mot de passe..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        {formError ? <p>Il y a une erreur dans le form</p> : ""}
        <button type="submit" className="fancy-button">
          Se connecter
        </button>
      </form>
      <Link to={"/auth/signup"}>Se créer un compte</Link>
    </div>
  );
}
