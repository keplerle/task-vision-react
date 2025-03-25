import React from "react";
import TaskItem from "./TaskItem";
import useTasks from "../hooks/useTasks"; // Import du hook useTasks  

const TaskList = () => {
  const { tasks, filter, toggleComplete, deleteTask } = useTasks();
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "uncompleted") return !task.completed;
    return true; // Affiche toutes les tâches par défaut
  });

  return (
    <div style={styles.container}>
    {filteredTasks.length === 0 ? (
      <p style={styles.emptyMessage}>Aucune tâche à afficher.</p>
    ) : (
      <ul>
        {filteredTasks.map((task) => (
                    <TaskItem
                    key={task.id}
                    task={task}
                    onToggleComplete={toggleComplete}
                    onDelete={deleteTask}
                  />
        ))}
      </ul>
    )}
  </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#ffffff",
  },
  emptyMessage: {
    fontSize: "16px",
    color: "#666",
    textAlign: "center",
  },
};

export default TaskList;
