import axios from "axios";

// Base URL de l'API
const API_BASE_URL = "https://votre-api.com/api/tasks"; // Remplacez par l'URL de votre serveur

// Fonction pour obtenir toutes les tâches
export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data; // Les données retournées par l'API
  } catch (error) {
    console.error("Erreur lors de la récupération des tâches :", error);
    throw error;
  }
};

// Fonction pour ajouter une nouvelle tâche
export const addTask = async (task) => {
  try {
    const response = await axios.post(API_BASE_URL, task);
    return response.data; // La tâche nouvellement créée
  } catch (error) {
    console.error("Erreur lors de l'ajout de la tâche :", error);
    throw error;
  }
};

// Fonction pour mettre à jour une tâche
export const updateTask = async (taskId, updatedTask) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${taskId}`, updatedTask);
    return response.data; // La tâche mise à jour
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la tâche :", error);
    throw error;
  }
};

// Fonction pour supprimer une tâche
export const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${taskId}`);
    return response.data; // Confirmation de la suppression
  } catch (error) {
    console.error("Erreur lors de la suppression de la tâche :", error);
    throw error;
  }
};
