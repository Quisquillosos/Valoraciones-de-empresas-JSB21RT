import EditUserEmail from "../components/EditUserEmail/EditUserEmail";
import EditUserPass from "../components/EditUserPass/EditUserPass";
import ProfileSidebar from "../components/ProfileSidebar/ProfileSidebar";
import { configMain } from "./ConfigPage.module.css";

const ConfigPage = () => {
  return (
    <main className={`${configMain}`}>
      <ProfileSidebar />
      <div>
        <EditUserEmail />
        <EditUserPass />
      </div>
    </main>
  );
};

export default ConfigPage;
