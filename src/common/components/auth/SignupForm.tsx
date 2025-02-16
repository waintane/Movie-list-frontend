import { FormEvent, useState } from "react";
import FetchAuthSignup from "../../db/FetchAuthSignup";
import { Link, useNavigate } from "react-router-dom";

export default function SignupForm() {
  const navigate = useNavigate();

  const [formError, setFormError] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (checkFormFormat()) return;

    const succeded = await FetchAuthSignup(
      firstName,
      lastName,
      email,
      password
    );
    if (succeded === true) navigate(`/auth/signin`);
  }

  function checkFormFormat() {
    if (!firstName || !lastName || !email || !password) {
      setFormError(true);
      return true;
    }

    if (!email.includes("@")) {
      setFormError(true);
      return true;
    }

    if (password !== confirmPassword) {
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
          <label htmlFor="firstName">Prénom :</label>
          <input
            type="text"
            id="firstName"
            className="auth-input"
            value={firstName}
            placeholder="Prénom..."
            onChange={(e) => setFirstName(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="lastName">Nom de famille :</label>
          <input
            type="text"
            id="lastName"
            className="auth-input"
            value={lastName}
            placeholder="Nom de famille..."
            onChange={(e) => setLastName(e.target.value)}
          />
        </section>
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
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            className="auth-input"
            value={password}
            placeholder="Mot de passe..."
            pattern='^(?=.*[!@#$%^&*(),.?\":{}|<>]).{8,40}$'
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            className="auth-input"
            value={confirmPassword}
            placeholder="Mot de passe..."
            pattern='^(?=.*[!@#$%^&*(),.?\":{}|<>]).{8,40}$'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </section>
        {formError ? <p>Il y a une erreur dans le form</p> : ""}
        <button type="submit" className="fancy-button">
          Enregistrer
        </button>
      </form>
      <Link to={"/auth/signin"}>Se connecter</Link>
    </div>
  );
}
