import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { StyledText } from "../../styles/typography";
import { Header, DashHeaderContainer } from "./style";

export const DashHeader = () => {
  const { user } = useContext(UserContext);

  return (
    <Header>
      <DashHeaderContainer>
        <StyledText typo="title-1" color="gray-0" tag="h2">
          Olá, {user.name}
        </StyledText>
        <StyledText typo="headline" color="gray-0" tag="h2">
          {user.course_module}
        </StyledText>
      </DashHeaderContainer>
    </Header>
  );
};
