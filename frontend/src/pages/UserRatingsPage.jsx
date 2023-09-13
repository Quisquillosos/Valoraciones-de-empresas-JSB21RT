import { useParams } from "react-router-dom";
import ListRatings from "../components/ListRatings/ListRatings";
import ProfileSidebar from "../components/ProfileSidebar/ProfileSidebar";
import useUserRatings from "../hooks/useUserRatings";

const UserRatingsPage = () => {
  const { userId } = useParams();
  const { userRatingsData } = useUserRatings(userId);
  console.log("esto pasaremos por props a list ratings");
  console.log(userRatingsData);

  return (
    <>
      <ProfileSidebar />
      <ListRatings rating={userRatingsData} />
    </>
  );
};

export default UserRatingsPage;
