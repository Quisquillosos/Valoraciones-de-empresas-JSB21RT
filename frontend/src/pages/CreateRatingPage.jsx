import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { newRatingService } from '../services';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';

const CreateRatingPage = () => {
    const { companyId } = useParams();
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);
    const [salary, setSalary] = useState('');
    const [workEnvironment, setWorkEnvironment] = useState('');
    const [promotionPosibility, setPromotionPosibility] = useState('');
    const [accesibility, setAccesibility] = useState('');
    const [review, setReview] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [response, setResponse] = useState('');

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            // hacer el servicio
            const data = {
                salary,
                workEnvironment,
                promotionPosibility,
                accesibility,
                review,
            };
            await newRatingService(data, companyId, token);
            setResponse('Company created');
            setLoading(false);
            navigate(`/companies/${companyId}`);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    return (
        <main>
            <form onSubmit={handleForm}>
                <fieldset>
                    <label htmlFor='salary'>Salary</label>
                    <select
                        name='salary'
                        id='salary'
                        onChange={(e) => setSalary(e.target.value)}
                    >
                        <option>Choose</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <label htmlFor='workEnvironment'>WorkEnvironment</label>
                    <select
                        name='workEnvironment'
                        id='workEnvironment'
                        onChange={(e) => setWorkEnvironment(e.target.value)}
                    >
                        <option>Choose</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <label htmlFor='promotionPosibility'>
                        PromotionPosibility
                    </label>
                    <select
                        name='promotionPosibility'
                        id='promotionPosibility'
                        onChange={(e) => setPromotionPosibility(e.target.value)}
                    >
                        <option>Choose</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <label htmlFor='accesibility'>Accesibility</label>
                    <select
                        name='accesibility'
                        id='accesibility'
                        onChange={(e) => setAccesibility(e.target.value)}
                    >
                        <option>Choose</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <label htmlFor='position'>Review</label>
                    <textarea
                        type='text'
                        id='position'
                        name='position'
                        value={review}
                        required
                        onChange={(e) => setReview(e.target.value)}
                    />
                </fieldset>
                <Button>Submit</Button>
            </form>
            {response && <p>{response}</p>}
            {error ? <p>{error}</p> : null}
            {loading ? <Loader /> : null}
        </main>
    );
};

export default CreateRatingPage;
