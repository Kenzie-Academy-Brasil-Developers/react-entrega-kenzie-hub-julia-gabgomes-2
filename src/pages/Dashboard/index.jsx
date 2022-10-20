import { DashNavbar } from "../../components/DashNavbar";
import { DashHeader } from "../../components/DashHeader";
import { TechProvider } from "../../contexts/TechContext";
import { DashMain } from "../../components/DashMain";
import { TechModal } from "../../components/TechModal";

export const Dashboard = () => (
  <>
    <DashNavbar />
    <DashHeader />
    <TechProvider>
      <DashMain />
      <TechModal />
    </TechProvider>
  </>
);
