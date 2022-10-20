import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

import { CgTrash } from "react-icons/cg";

export const TechList = ({ tech }) => {
  const { deleteTech } = useContext(TechContext);

  return (
    <li>
      <h3>{tech.title}</h3>
      <h4>{tech.status}</h4>
      <button onClick={() => deleteTech(tech.id)}>
        <CgTrash />
      </button>
    </li>
  );
};
