import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bienvenue dans votre Gestionnaire de Tâches</h1>
      <p style={styles.description}>
        Gérez vos tâches, collaborez avec votre équipe, et restez organisé en toute simplicité.
      </p>
      <div style={styles.buttons}>
        <Link to="/tasks" style={styles.button}>
          Accéder aux Tâches
        </Link>
        <Link to="/team" style={styles.button}>
          Voir l'Équipe
        </Link>
        <Link to="/auth" style={styles.button}>
          Connexion/Inscription
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px 20px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "30px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },
  button: {
    textDecoration: "none",
    color: "white",
    backgroundColor: "#4CAF50",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default HomePage;
