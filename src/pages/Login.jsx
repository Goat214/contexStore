import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

function Login() {
  const { userData, dispatch } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const cheakEmail = userData.find((user) => user.email == email);
    const cheakPassword = userData.find((user) => user.password == password);

    if (cheakEmail && cheakPassword) {
      dispatch({ type: "LOGIN" });
      setError("");
    } else {
      setError("Email yoki parol noto‘g‘ri");
    }
  };

  return (
    <section className="login-section">
      <div className="login-wrapper">
        <form onSubmit={handleSubmit} className="login-form">
          <h1 className="login-title">Login</h1>

          {error && <p className="login-error">{error}</p>}

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Parol:</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Kirish
          </button>
          <div className="flex justify-between">
            <p>royhatdan o'tmadingizmi? </p>
            <Link
              to="/signup"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Signup
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
