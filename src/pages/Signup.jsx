import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { userData, dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [displayNickName, setDisplayNickName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      displayNickName,
      displayName,
      email,
      password,
      photoURL: photoURL || "https://via.placeholder.com/150",
    };

    dispatch({ type: "ADD_USER", payload: newUser });

    const updatedUsers = [...userData, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    dispatch({ type: "LOGIN", payload: newUser });

    navigate("/login");

    setDisplayNickName("");
    setDisplayName("");
    setEmail("");
    setPassword("");
    setPhotoURL("");
  };

  return (
    <section>
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h1 style={styles.title}>Sign Up</h1>

          <label style={styles.label}>Display Nickname:</label>
          <input
            type="text"
            value={displayNickName}
            onChange={(e) => setDisplayNickName(e.target.value)}
            style={styles.input}
            placeholder="Goat"
          />

          <label style={styles.label}>Display Name:</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            style={styles.input}
            placeholder="Abdulatif Kimsanaliyev"
          />

          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            placeholder="example@mail.com"
          />

          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            placeholder="123123"
          />

          <label style={styles.label}>Photo URL (optional):</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            style={styles.input}
            placeholder="https://example.com/photo.jpg"
          />

          <button type="submit" style={styles.button}>
            Ro‘yxatdan o‘tish
          </button>
          <Link
              to="/login"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Login
            </Link>
        </form>
      </div>
    </section>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "grid",
    placeItems: "center",
    backgroundColor: "#f3f4f6",
  },
  form: {
    width: "360px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "700",
  },
  label: {
    fontWeight: "600",
    fontSize: "0.9rem",
  },
  input: {
    padding: "8px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#2563eb",
    color: "#fff",
    fontWeight: "600",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "10px",
  },
};

export default Signup;
