import { useContext, useState } from 'react';
import { logInUserService } from '../services';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { loginSection } from './LoginPage.module.css';
import Loader from '../components/Loader/Loader';

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const token = await logInUserService({ email, password });
            setLoading(false);

            login(token);
            navigate('/');
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };
    return (
        <section className={`${loginSection}`}>
            <h1>Login</h1>
            <form onSubmit={handleForm}>
                <fieldset>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor='pass'>Password</label>
                    <div>
                        <input
                            type={`${showPassword ? 'text' : 'password'}`}
                            name='pass'
                            id='pass'
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            type='button'
                            onClick={(e) => {
                                e.preventDefault();
                                setShowPassword(!showPassword);
                            }}
                        >
                            {showPassword ? '🐵' : '🙈'}
                        </button>
                    </div>
                </fieldset>
                <div>
                    <button type='submit'>Login</button>
                </div>
                {error ? <p>{error}</p> : null}
                {loading ? <Loader /> : null}
            </form>
        </section>
    );
};

export default LoginPage;
