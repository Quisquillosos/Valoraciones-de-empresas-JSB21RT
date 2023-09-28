import { useParams } from "react-router-dom";
import ListRatings from "../components/ListRatings/ListRatings";
import ProfileSidebar from "../components/ProfileSidebar/ProfileSidebar";
import useUserRatings from "../hooks/useUserRatings";

const UserRatingsPage = () => {
  const { userId } = useParams();
  const { userRatingsData } = useUserRatings(userId);

  return (
    <main>
      <ProfileSidebar />
      <ListRatings rating={userRatingsData} />
    </main>
  );
};

export default UserRatingsPage;
