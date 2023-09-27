import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { editPasswordService } from '../../services';
import { editPassMain } from './EditUserPass.module.css';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';

const EditUserPass = () => {
    const [newPass, setNewPass] = useState('');
    const [newPass1, setNewPass1] = useState('');
    const [oldPass, setOldPass] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { token, logout } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (newPass !== newPass1)
                throw new Error('PPasswords do not match');
            const data = { oldPass, newPass };
            const dataToSend = JSON.stringify(data);
            await editPasswordService(dataToSend, token);
            setLoading(false);
            logout();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <main className={`${editPassMain}`}>
            <h3>Password Reset</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='oldPass'>Current password</label>
                <div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name='oldPass'
                        id='oldPass'
                        value={oldPass}
                        onChange={(e) => setOldPass(e.target.value)}
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
                <label htmlFor='newPass'>New Password</label>
                <div>
                    <input
                        type={showPassword1 ? 'text' : 'password'}
                        name='newPass'
                        id='newPass'
                        value={newPass}
                        onChange={(e) => setNewPass(e.target.value)}
                    />
                    <button
                        type='button'
                        onClick={(e) => {
                            e.preventDefault();
                            setShowPassword1(!showPassword1);
                        }}
                    >
                        {showPassword1 ? '🐵' : '🙈'}
                    </button>
                </div>
                <label htmlFor='newPass1'>Confirm new password</label>
                <div>
                    <input
                        type={showPassword2 ? 'text' : 'password'}
                        name='newPass1'
                        id='newPass1'
                        value={newPass1}
                        onChange={(e) => setNewPass1(e.target.value)}
                    />
                    <button
                        type='button'
                        onClick={(e) => {
                            e.preventDefault();
                            setShowPassword2(!showPassword2);
                        }}
                    >
                        {showPassword2 ? '🐵' : '🙈'}
                    </button>
                </div>

                <Button>Save</Button>
            </form>
            {error && <p>{error}</p>}
            {loading && <Loader />}
        </main>
    );
};

export default EditUserPass;
