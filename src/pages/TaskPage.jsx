import React from "react";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import TaskFilter from "../components/TaskFilter";
import AddTaskForm from "../components/AddTaskForm";
import Footer from "../components/Footer";
import useTasks from "../hooks/useTasks";

const TaskPage = () => {
  const { filter, tasks, setTasks } = useTasks();

  // Fonction pour ajouter une nouvelle tâche
  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Fonction pour basculer l'état "terminé" d'une tâche
  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Fonction pour supprimer une tâche
  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Fonction pour filtrer les tâches
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "uncompleted") return !task.completed;
    return true; // Tous les filtres
  });

  return (
    <div>
      <Navbar />
      <main style={styles.main}>
        <h1 style={styles.title}>Gérez vos Tâches</h1>

        {/* Formulaire pour ajouter des tâches */}
        <AddTaskForm onAddTask={handleAddTask} />
        
        {/* Filtre des tâches */} 
        <div style={styles.filter}>
          <TaskFilter />
        </div>                               

        {/* Liste des tâches */}
        <TaskList
          tasks={filteredTasks}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDeleteTask}
        />
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  main: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    fontSize: "24px",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  filter: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  filterButton: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "white",
    fontSize: "14px",
  },
};

export default TaskPage;
