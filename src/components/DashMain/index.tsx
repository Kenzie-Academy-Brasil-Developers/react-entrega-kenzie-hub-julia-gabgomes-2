import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TechModal } from "../TechRegisterModal";

import { TechList } from "../TechList";

import { StyledText } from "../../styles/typography";
import { ButtonSmall } from "../../styles/button";
import { Main, DashMainContainer, TechHeader, StyledList } from "./style";

export const DashMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { techs, loading } = useContext(UserContext);

  if (loading) {
    return null;
  }

  return (
    <Main>
      <DashMainContainer>
        <TechHeader>
          <StyledText typo="title-2" color="gray-0" tag="h2">
            Tecnologias
          </StyledText>
          <ButtonSmall onClick={() => setIsModalOpen(true)}>+</ButtonSmall>
        </TechHeader>
        <StyledList>
          {techs?.map((element) => (
            <TechList tech={element} key={element.id} />
          ))}
        </StyledList>
      </DashMainContainer>
      {isModalOpen && <TechModal setIsModalOpen={setIsModalOpen} />}
    </Main>
  );
};
