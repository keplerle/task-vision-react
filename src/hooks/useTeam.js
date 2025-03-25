import { useContext } from "react";
import { TeamContext } from "../context/TeamContext";

// Hook personnalisé pour accéder au contexte
export const useTeam = () => {
  const context = useContext(TeamContext);

  if (!context) {
    throw new Error("useTeam doit être utilisé dans un TeamProvider.");
  }
  
  return context;
};


export default useTeam;
