import React, { createContext, useState } from "react";

// Création du contexte pour les membres d'équipe
export const TeamContext = createContext();

// Composant fournisseur pour l'équipe
export const TeamProvider = ({ children }) => {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "Alice", role: "Développeur", tasksAssigned: 5 },
    { id: 2, name: "Bob", role: "Designer", tasksAssigned: 3 },
  ]);

  // Ajouter un membre
  const addTeamMember = (member) => {
    setTeamMembers((prevMembers) => [...prevMembers, { ...member, id: Date.now() }]);
  };

  // Supprimer un membre
  const removeTeamMember = (memberId) => {
    setTeamMembers((prevMembers) => prevMembers.filter((member) => member.id !== memberId));
  };

  // Modifier un membre existant
  const editTeamMember = (memberId, updatedMember) => {
    setTeamMembers((prevMembers) =>
      prevMembers.map((member) => (member.id === memberId ? { ...member, ...updatedMember } : member))
    );
  };

  return (
    <TeamContext.Provider
      value={{
        teamMembers,
        addTeamMember,
        removeTeamMember,
        editTeamMember,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};
