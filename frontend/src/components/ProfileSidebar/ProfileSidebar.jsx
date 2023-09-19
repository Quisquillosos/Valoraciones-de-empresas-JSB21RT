import { Link } from 'react-router-dom';
import SidebarUserCompanyList from '../SidebarUserCompanyList/SidebarUserCompanyList';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

const ProfileSidebar = () => {
    const { user } = useContext(AuthContext);

    if (!user) return <p>loading</p>;
    return (
        <ul>
            <li>
                <Link to={`/users`}>Perfil</Link>
            </li>
            <li>
                <Link to={`/users/profile/settings`}>Configuracion</Link>
            </li>
            <li>
                <SidebarUserCompanyList userInfo={user?.user} />
            </li>
            <li>
                <Link to={`/users/ratings/${user?.user?.id}`}>
                    Valoraciones
                </Link>
            </li>
        </ul>
    );
};

export default ProfileSidebar;
