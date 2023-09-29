import ProfileSidebar from "../components/ProfileSidebar/ProfileSidebar";
import UserProfile from "../components/UserProfile/UserProfile";
import { privateUserMain } from "./PrivateUserProfilePage.module.css";

const PrivateUserProfilePage = () => {
  return (
    <main className={`${privateUserMain}`}>
      <ProfileSidebar />
      <UserProfile />
    </main>
  );
};
export default PrivateUserProfilePage;
