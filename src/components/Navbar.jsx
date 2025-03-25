import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Gestionnaire de Tâches</div>
      <ul style={styles.menu}>
        <li style={styles.menuItem}><a href="/" style={styles.link}>Accueil</a></li>
        <li style={styles.menuItem}><a href="/tasks" style={styles.link}>Tâches</a></li>
        <li style={styles.menuItem}><a href="/team" style={styles.link}>Équipe</a></li>
        <li style={styles.menuItem}><a href="/settings" style={styles.link}>Paramètres</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    margin: 0,
    padding: 0,
  },
  menuItem: {
    fontSize: "1rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default Navbar;
