import { useContext } from "react";
import { TechContext, IDeleteTechData } from "../../contexts/TechContext";
import { IUser, IUserTechs } from "../../contexts/UserContext";

import { CgTrash } from "react-icons/cg";

import { StyledText } from "../../styles/typography";
import { StyledLi } from "./style";

interface TechListProps {
  tech: IUserTechs;
}

export const TechList = ({ tech }: TechListProps) => {
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

      {/* <button type="button" onClick={() => deleteTech(tech.id)}>
        <CgTrash />
      </button> */}
    </StyledLi>
  );
};
