import React, { createContext, useState } from "react";

// Création du contexte
export const TaskContext = createContext();

// Composant Provider
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // "all", "completed", "uncompleted"

  // Fonction pour ajouter une nouvelle tâche
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Fonction pour basculer l'état "terminé" d'une tâche
  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Fonction pour supprimer une tâche
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        filter,
        addTask,
        setTasks,
        setFilter,
        toggleComplete,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
