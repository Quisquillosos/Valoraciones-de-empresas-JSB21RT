import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const Auth = () => {
    const { user, logout } = useContext(AuthContext);

    return user ? (
        <section>
            <Link to={`/users`}>Nosotros</Link>{' '}
            <button onClick={() => logout()}>Logout</button>
        </section>
    ) : (
        <ul>
            <li>
                <Link to={'/users/register'}>Register</Link>
            </li>
            <li>
                <Link to={'/users/login'}>Login</Link>
            </li>
        </ul>
    );
};
