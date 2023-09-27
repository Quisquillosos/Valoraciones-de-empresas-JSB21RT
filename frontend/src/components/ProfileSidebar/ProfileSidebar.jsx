import { Link } from 'react-router-dom';
import SidebarUserCompanyList from '../SidebarUserCompanyList/SidebarUserCompanyList';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { profileSidebar } from './ProfileSidebar.module.css';
import Loader from '../Loader/Loader';

const ProfileSidebar = () => {
    const { user } = useContext(AuthContext);
    const userIdToSend = user?.user[0]?.id || user?.user?.id;
    if (!user?.user) return <Loader />;
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
                <Link to={`/users/ratings/${userIdToSend}`}>Ratings</Link>
            </li>
        </ul>
    );
};

export default ProfileSidebar;
