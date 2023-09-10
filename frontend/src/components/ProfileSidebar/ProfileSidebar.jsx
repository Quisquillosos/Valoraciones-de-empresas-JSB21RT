import { Link } from 'react-router-dom';
const ProfileSidebar = () => {
    return (
        <ul>
            <li>
                <Link to={`/users`}>Perfil</Link>
            </li>
            <li>
                <Link to={`/users/profile/settings`}>Configuracion</Link>
            </li>
            <li>
                <Link to={`/companies/profile`}>Crear Empresa</Link>
            </li>
            <li>
                <Link to={`/users/ratings`}>Valoraciones</Link>
            </li>
        </ul>
    );
};

export default ProfileSidebar;
