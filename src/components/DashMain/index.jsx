import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TechContext } from "../../contexts/TechContext";

import { CgTrash } from "react-icons/cg";
import { Main } from "./style";
// import { StyledText } from "../../styles/typography.js";

export const DashMain = () => {
  const { techs } = useContext(UserContext);
  const { deleteTech } = useContext(TechContext);

  return (
    <Main>
      <div>
        <h2>Tecnologias</h2>
        <button>+</button>
      </div>
      <div>
        <ul>
          {techs.map((element) => {
            return (
              <li key={element.id}>
                <h3>{element.title}</h3>
                <h4>{element.status}</h4>
                <button onClick={() => deleteTech(element.id)}>
                  <CgTrash />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </Main>
  );
};
