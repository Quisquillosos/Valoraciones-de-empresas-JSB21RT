import { Link } from "react-router-dom";
import SidebarUserCompanyList from "../SidebarUserCompanyList/SidebarUserCompanyList";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { profileSidebar } from "./ProfileSidebar.module.css";

const ProfileSidebar = () => {
  const { user } = useContext(AuthContext);
  if (!user?.user) return <p>loading</p>;
  return (
    <ul className={`${profileSidebar}`}>
      <li>
        <Link to={`/users`}>Profile</Link>
      </li>
      <li>
        <Link to={`/users/profile/settings`}>Settings</Link>
      </li>
      <li>
        <SidebarUserCompanyList userInfo={user?.user} />
      </li>
      <li>
        <Link to={`/users/ratings/${user?.user?.id}`}>Ratings</Link>
      </li>
    </ul>
  );
};

export default ProfileSidebar;
