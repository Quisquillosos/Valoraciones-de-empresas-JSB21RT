import { useParams } from 'react-router-dom';
import ListRatings from '../components/ListRatings/ListRatings';
import ProfileSidebar from '../components/ProfileSidebar/ProfileSidebar';
import useUserRatings from '../hooks/useUserRatings';
import { ratingsMain } from './UserRatingsPage.module.css';

const UserRatingsPage = () => {
    const { userId } = useParams();
    const { userRatingsData } = useUserRatings(userId);
    console.log(userRatingsData, 'esto es lo q le pasamos a list Ratings');
    return (
        <main className={`${ratingsMain}`}>
            <ProfileSidebar />
            <ListRatings rating={userRatingsData} />
        </main>
    );
};

export default UserRatingsPage;
