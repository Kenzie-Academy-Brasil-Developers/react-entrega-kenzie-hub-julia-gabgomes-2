import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { StyledText } from "../../styles/typography";
import { Header } from "./style";
import { Container } from "./style";

export const DashHeader = () => {
  const { user } = useContext(UserContext);

  return (
    <Header>
      <Container>
        <StyledText typo="title-1" color="gray-0" tag="h2">
          Olá, {user.name}
        </StyledText>
        <StyledText typo="headline-bold" color="gray-0" tag="h2">
          {user.course_module}
        </StyledText>
      </Container>
    </Header>
  );
};
