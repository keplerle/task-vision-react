import React from "react";

const TeamMember = ({ member, onEdit, onRemove }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.name}>{member.name}</h3>
      <p style={styles.role}>Rôle : {member.role}</p>
      <p style={styles.tasks}>Tâches assignées : {member.tasksAssigned}</p>
      <div style={styles.actions}>
        <button style={styles.editButton} onClick={() => onEdit(member.id)}>
          Modifier
        </button>
        <button style={styles.removeButton} onClick={() => onRemove(member.id)}>
          Supprimer
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    marginBottom: "10px",
  },
  name: {
    fontSize: "20px",
    color: "#333",
  },
  role: {
    fontSize: "16px",
    color: "#666",
  },
  tasks: {
    fontSize: "14px",
    color: "#999",
    margin: "5px 0",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  editButton: {
    padding: "5px 10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  removeButton: {
    padding: "5px 10px",
    backgroundColor: "#ff4d4f",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default TeamMember;
