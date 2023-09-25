import ProfileSidebar from "../components/ProfileSidebar/ProfileSidebar";
import UserProfile from "../components/UserProfile/UserProfile";
import "./PrivateUserProfilePage.module.css";

const PrivateUserProfilePage = () => {
  return (
    <main>
      <ProfileSidebar />
      <UserProfile />
    </main>
  );
};
export default PrivateUserProfilePage;
