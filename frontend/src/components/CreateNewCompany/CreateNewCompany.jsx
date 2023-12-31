import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { createCompanyService } from '../../services';
import { createCompanyMain } from './CreateNewCompany.module.css';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';

const CreateNewCompany = () => {
    const { token } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [bio, setBio] = useState('');
    const [photo, setPhoto] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');
        setResponse('');
        setCity('');
        setBio('');
        setPhoto(null);
        setCountry('');
        setName('');
        try {
            setLoading(true);
            const data = new FormData(e.target);
            await createCompanyService(data, token);
            setResponse('Company created');
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    };
    return (
        <main className={`${createCompanyMain}`}>
            <h3>Create company</h3>
            <form onSubmit={handleForm}>
                <fieldset>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        id='name'
                        required
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor='country'>Country</label>
                    <input
                        type='text'
                        name='country'
                        value={country}
                        id='country'
                        required
                        onChange={(e) => setCountry(e.target.value)}
                    />
                    <label htmlFor='city'>City</label>
                    <input
                        type='text'
                        name='city'
                        value={city}
                        id='city'
                        required
                        onChange={(e) => setCity(e.target.value)}
                    />

                    <label htmlFor='bio'>Bio</label>
                    <textarea
                        rows={5}
                        type='text'
                        name='bio'
                        value={bio}
                        id='bio'
                        required
                        onChange={(e) => setBio(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor='photo'>
                        <p>Upload photo</p>
                        <input
                            type='file'
                            name='photo'
                            id='photo'
                            accept={'image/*'}
                            onChange={(e) => setPhoto(e.target.files[0])}
                        />
                    </label>
                    {photo ? (
                        <figure>
                            <img
                                src={URL.createObjectURL(photo)}
                                style={{ width: '100px', height: "100px"}}
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
        </main>
    );
};

export default CreateNewCompany;
