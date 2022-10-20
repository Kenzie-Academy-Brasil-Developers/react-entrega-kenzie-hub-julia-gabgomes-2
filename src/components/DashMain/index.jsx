import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TechModal } from "../TechRegisterModal";

import { TechList } from "../TechList";

import { Main } from "./style";

export const DashMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { techs, loading } = useContext(UserContext);

  if (loading) {
    return null;
  }

  return (
    <>
      <Main>
        <div>
          <h2>Tecnologias</h2>
          <button onClick={() => setIsModalOpen(true)}>+</button>
        </div>
        <div>
          <ul>
            {techs.map((element) => (
              <TechList tech={element} key={element.id} />
            ))}
          </ul>
        </div>
      </Main>
      {isModalOpen && <TechModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};
