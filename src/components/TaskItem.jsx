import React from "react";

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div style={styles.container}>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          style={styles.checkbox}
        />
        <span style={{ ...styles.text, textDecoration: task.completed ? "line-through" : "none" }}>
          {task.title}
        </span>
      </div>
      <button style={styles.deleteButton} onClick={() => onDelete(task.id)}>
        Supprimer
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "10px",
    backgroundColor: "#f9f9f9",
  },
  checkbox: {
    marginRight: "10px",
  },
  text: {
    fontSize: "16px",
    color: "#333",
  },
  deleteButton: {
    backgroundColor: "#ff4d4f",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default TaskItem;
