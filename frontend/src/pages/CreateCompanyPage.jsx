import CreateNewCompany from "../components/CreateNewCompany/CreateNewCompany";
import ProfileSidebar from "../components/ProfileSidebar/ProfileSidebar";
import {createCompanyMain} from "./CreateCompanyPage.module.css"

const CreateCompanyPage = () => {
  return (
    <main className={`${createCompanyMain}`}>
      <ProfileSidebar />
      <CreateNewCompany/>
    </main>
  );
};

export default CreateCompanyPage;