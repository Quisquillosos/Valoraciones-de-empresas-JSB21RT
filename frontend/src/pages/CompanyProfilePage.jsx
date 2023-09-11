import { useParams } from "react-router-dom";
import EditCompanyProfile from "../components/EditCompanyProfile/EditCompanyProfile";
import ProfileSidebar from "../components/ProfileSidebar/ProfileSidebar";

import "./CompanyProfilePage.module.css";

const CompanyProfilePage = () => {
  const { companyId } = useParams();
  return (
    <>
      <ProfileSidebar id={companyId} />
      <EditCompanyProfile id={companyId} />
    </>
  );
};
export default CompanyProfilePage;
