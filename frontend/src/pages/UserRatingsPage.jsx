import { useParams } from "react-router-dom";
import ListRatings from "../components/ListRatings/ListRatings";
import ProfileSidebar from "../components/ProfileSidebar/ProfileSidebar";
import useUserRatings from "../hooks/useuserRatings";

const UserRatingsPage = () => {
  const { userId } = useParams();
  const { userRatingsData } = useUserRatings(userId);
  return (
    <>
      <ProfileSidebar />
      <ListRatings rating={userRatingsData} />
    </>
  );
};

export default UserRatingsPage;
