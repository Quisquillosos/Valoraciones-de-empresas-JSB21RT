import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { editMyDataService } from '../../services';

const UserProfile = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const { user, token } = useContext(AuthContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');
    const [photo, setPhoto] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setFirstName(user?.user[0]?.firstName || user?.user?.firstName);
            setLastName(user?.user[0]?.lastName || user?.user?.lastName);
            setBio(`${user?.user[0]?.bio || user?.user?.bio || ''}`);
            setPhoto(`${user?.user[0]?.photo || user?.user?.photo || ''}`);
        }
    }, [user]);

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');

        try {
            setLoading(true);
            const data = new FormData(e.target);
            await editMyDataService(data, token);
            setResponse('Tus datos se han modificado correctamente');
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    };

    return (
        <>
            <form className='userProfile' onSubmit={handleForm}>
                <fieldset>
                    <label htmlFor='firstName'>FirstName</label>
                    <input
                        type='text'
                        name='firstName'
                        value={firstName}
                        id='firstName'
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <label htmlFor='lastName'>LastName</label>
                    <input
                        type='text'
                        name='lastName'
                        value={lastName}
                        id='lastName'
                        required
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <label htmlFor='bio'>Bio</label>
                    <input
                        type='text'
                        name='bio'
                        value={bio}
                        id='bio'
                        required
                        onChange={(e) => setBio(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor='image'>Photo</label>
                    <input
                        type='file'
                        name='image'
                        id='image'
                        accept={'image/*'}
                        onChange={(e) => setPhoto(e.target.files[0])}
                    />
                    {photo ? (
                        <figure>
                            <img
                                src={`${backendUrl}${user?.user?.photo}`}
                                style={{ width: '100px' }}
                                alt='Preview'
                            />
                        </figure>
                    ) : null}
                </fieldset>
                <button>Submit</button>
            </form>
            {response && <p>{response}</p>}
            {error ? <p>{error}</p> : null}
            {loading ? <p>loading...</p> : null}
        </>
    );
};

export default UserProfile;
