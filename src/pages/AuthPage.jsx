import React, { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // État pour basculer entre connexion et inscription
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Tentative de connexion :", { email, password });
      // Ajoutez ici la logique de connexion (exemple : appel API)
    } else {
      console.log("Tentative d'inscription :", { email, password });
      // Ajoutez ici la logique d'inscription (exemple : appel API)
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{isLogin ? "Connexion" : "Inscription"}</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Adresse email"
          style={styles.input}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          {isLogin ? "Se connecter" : "S'inscrire"}
        </button>
      </form>
      <p style={styles.switchText}>
        {isLogin ? "Pas encore inscrit ?" : "Déjà inscrit ?"}{" "}
        <span
          style={styles.switchLink}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Créer un compte" : "Se connecter"}
        </span>
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    maxWidth: "400px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  switchText: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#666",
  },
  switchLink: {
    color: "#4CAF50",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default AuthPage;
