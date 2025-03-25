import React from "react";
import TeamMember from "../components/TeamMember";
import useTeam from "../hooks/useTeam";
import Navbar from "../components/Navbar";
const TeamPage = () => {
  const { teamMembers, addTeamMember, removeTeamMember, editTeamMember } = useTeam();

  const handleAddMember = () => {
    const name = prompt("Nom du membre :");
    const role = prompt("Rôle du membre :");
    if (name && role) {
      addTeamMember({ name, role, tasksAssigned: 0 });
    }
  };

  const handleEdit = (id) => {
    const name = prompt("Nouveau nom :");
    const role = prompt("Nouveau rôle :");
    if (name && role) {
      editTeamMember(id, { name, role });
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Équipe</h1>
      <button onClick={handleAddMember}>Ajouter un membre</button>
      <ul>
        {teamMembers.map((member) => (
          <TeamMember
          key={member.id}
          member={member}
          onEdit={handleEdit}
          onRemove={removeTeamMember}
        />
        ))}
      </ul>
    </div>
  );
};

export default TeamPage;
