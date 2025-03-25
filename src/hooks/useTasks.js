import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// Hook personnalisé pour accéder au TaskContext
const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks doit être utilisé dans un TaskProvider");
  }

  return context;
};

export default useTasks;
