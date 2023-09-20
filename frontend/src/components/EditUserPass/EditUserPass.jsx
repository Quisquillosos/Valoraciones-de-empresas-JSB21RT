import { useContext, useState } from 'react';
import Accordion from '../Accordion/Accordion';
import { AuthContext } from '../../context/AuthContext';
import { editPasswordService } from '../../services';

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
        <>
            <Accordion>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='oldPass'>
                    Current password
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
                            👁️
                        </button>
                    </label>
                    <label htmlFor='newPass'>
                        New Password
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
                            👁️
                        </button>
                    </label>
                    <label htmlFor='newPass1'>
                    Confirm new password
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
                            👁️
                        </button>
                    </label>
                    <button type='submit'>Save Changes</button>
                </form>
                {error && <p>{error}</p>}
                {loading && <p>Loading...</p>}
            </Accordion>
        </>
    );
};

export default EditUserPass;
