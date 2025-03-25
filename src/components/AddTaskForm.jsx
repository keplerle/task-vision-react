import React, { useState } from "react";
import useTasks from "../hooks/useTasks"; // Import du hook useTasks  

const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTask } = useTasks(); // Récupération de la fonction addTask via TaskContext

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Le titre de la tâche est obligatoire !");
      return;
    }

    const newTask = {
      id: Date.now(), // Génération d'un ID unique
      title: title.trim(),
      description: description.trim(),
      completed: false,
    };

    addTask(newTask); // Ajout de la tâche via le contexte
    setTitle(""); // Réinitialisation des champs
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre de la tâche"
        style={styles.input}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description (facultatif)"
        style={styles.textarea}
      />
      <button type="submit" style={styles.button}>
        Ajouter une tâche
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
    minHeight: "80px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default AddTaskForm;
