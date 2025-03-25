// Fonction pour formater une date au format lisible
export const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", options);
  };
  
  // Fonction pour générer un identifiant unique
  export const generateUniqueId = () => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };
  
  // Fonction pour valider qu'un champ n'est pas vide
  export const isFieldEmpty = (fieldValue) => {
    return !fieldValue || fieldValue.trim() === "";
  };
  
  // Fonction pour compter les tâches terminées
  export const countCompletedTasks = (tasks) => {
    return tasks.filter((task) => task.completed).length;
  };
  
  // Fonction pour filtrer les tâches par statut
  export const filterTasks = (tasks, filter) => {
    switch (filter) {
      case "completed":
        return tasks.filter((task) => task.completed);
      case "uncompleted":
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  };
  