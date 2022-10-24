import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

import { CgTrash } from "react-icons/cg";

import { StyledText } from "../../styles/typography";
import { StyledLi } from "./style";

export const TechList = ({ tech }) => {
  const { deleteTech } = useContext(TechContext);

  return (
    <StyledLi>
      <div>
        <StyledText typo="title-3" color="gray-0" tag="h3">
          {tech.title}
        </StyledText>
        <StyledText typo="headline" color="gray-0" tag="h4">
          {tech.status}
        </StyledText>
      </div>

      <button onClick={() => deleteTech(tech.id)}>
        <CgTrash />
      </button>
    </StyledLi>
  );
};
