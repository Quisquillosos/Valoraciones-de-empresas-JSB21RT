import EditUserEmail from "../components/EditUserEmail/EditUserEmail";
import EditUserPass from "../components/EditUserPass/EditUserPass";
import ProfileSidebar from "../components/ProfileSidebar/ProfileSidebar";

const ConfigPage = () => {
  return (
    <>
      <ProfileSidebar />
      <EditUserEmail />
      <h3>Password Reset</h3>
      <EditUserPass />
    </>
  );
};

export default ConfigPage;
