import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© {new Date().getFullYear()} Gestionnaire de Tâches. Tous droits réservés.</p>
      <div style={styles.links}>
        <a href="#privacy" style={styles.link}>Politique de confidentialité</a>
        <a href="#terms" style={styles.link}>Conditions d'utilisation</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: "10px 20px",
    textAlign: "center",
    backgroundColor: "#f1f1f1",
    borderTop: "1px solid #ccc",
  },
  text: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "5px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  link: {
    fontSize: "14px",
    color: "#4CAF50",
    textDecoration: "none",
  },
};

export default Footer;
