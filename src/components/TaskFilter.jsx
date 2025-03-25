import React from "react";
import useTasks from "../hooks/useTasks";

const TaskFilter = () => {
  const { filter, setFilter } = useTasks();

  return (
    <div>
      <button onClick={() => setFilter("all")} style={getButtonStyle(filter === "all")}>
        Toutes
      </button>
      <button onClick={() => setFilter("completed")} style={getButtonStyle(filter === "completed")}>
        Terminées
      </button>
      <button onClick={() => setFilter("uncompleted")} style={getButtonStyle(filter === "uncompleted")}>
        À faire
      </button>
    </div>
  );
};

// Fonction pour styliser le bouton actif
const getButtonStyle = (isActive) => ({
  margin: "5px",
  padding: "10px",
  backgroundColor: isActive ? "#4CAF50" : "#ccc",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
});

export default TaskFilter;
