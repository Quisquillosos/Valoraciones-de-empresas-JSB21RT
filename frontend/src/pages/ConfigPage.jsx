import EditUserEmail from "../components/EditUserEmail/EditUserEmail";
import EditUserPass from "../components/EditUserPass/EditUserPass";
import ProfileSidebar from "../components/ProfileSidebar/ProfileSidebar";

const ConfigPage = () => {
  return (
    <main>
      <ProfileSidebar />
      <EditUserEmail />
      <EditUserPass />
    </main>
  );
};

export default ConfigPage;
