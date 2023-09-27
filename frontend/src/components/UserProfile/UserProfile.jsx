import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { editMyDataService } from '../../services';
import { userProfile } from './UserProfile.module.css';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';

const UserProfile = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const { user, token } = useContext(AuthContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');
    const [photo, setPhoto] = useState(null);
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [photoUrl, setPhotoUrl] = useState('');
    const [previewphotoUrl, setPreviewPhotoUrl] = useState('');

    useEffect(() => {
        if (user) {
            setFirstName(user?.user[0]?.firstName || user?.user?.firstName);
            setLastName(user?.user[0]?.lastName || user?.user?.lastName);
            setBio(`${user?.user[0]?.bio || user?.user?.bio || ''}`);
            setPhoto(`${user?.user[0]?.photo || user?.user?.photo || ''}`);
            setPhotoUrl(`${backendUrl}/${user?.user[0]?.photo}`);
        }
    }, [user, backendUrl]);

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');
        setResponse('');

        try {
            setLoading(true);
            const data = new FormData();
            data.append('firstName', firstName);
            data.append('lastName', lastName);
            data.append('bio', bio);
            if (photo) {
                data.append('photo', photo);
                setPhotoUrl(URL.createObjectURL(photo));
            }
            await editMyDataService(data, token);
            setResponse('Your data has been successfully modified');
            setPreviewPhotoUrl(null);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    };

    return (
        <div className={`${userProfile}`}>
            <h3>Profile </h3>
            <form onSubmit={handleForm}>
                <fieldset>
                    <img
                        src={`${photoUrl}`}
                        style={{ width: '100px' }}
                        alt='img profile'
                    />
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
                    <textarea
                        rows='5'
                        type='text'
                        name='bio'
                        value={bio}
                        id='bio'
                        required
                        onChange={(e) => setBio(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor='image'>
                        <p> Upload photo</p>
                        <input
                            type='file'
                            name='image'
                            id='image'
                            accept={'image/*'}
                            onChange={(e) => {
                                setPhoto(e.target.files[0]);
                                setPreviewPhotoUrl(
                                    URL.createObjectURL(e.target.files[0])
                                );
                            }}
                        />
                    </label>
                    {previewphotoUrl ? (
                        <figure>
                            <img
                                src={`${previewphotoUrl}`}
                                style={{ width: '100px' }}
                                alt='Preview'
                            />
                        </figure>
                    ) : null}
                </fieldset>
                <Button>Submit</Button>
            </form>
            {response && <p>{response}</p>}
            {error ? <p>{error}</p> : null}
            {loading ? <Loader /> : null}
        </div>
    );
};

export default UserProfile;
