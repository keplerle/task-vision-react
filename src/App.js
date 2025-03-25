import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
import AuthPage from "./pages/AuthPage";
import TeamPage from "./pages/TeamPage";
import { TeamProvider } from "./context/TeamContext";
import { TaskProvider } from "./context/TaskContext";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Page d'accueil */}
          <Route path="/tasks" element={<TaskProvider><TaskPage /></TaskProvider>} /> {/* Page des tâches */}
          <Route path="/auth" element={<AuthPage />} /> {/* Page d'authentification */}
          <Route path="/team" element={<TeamProvider><TeamPage /></TeamProvider>} /> {/* Page de l'équipe */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
