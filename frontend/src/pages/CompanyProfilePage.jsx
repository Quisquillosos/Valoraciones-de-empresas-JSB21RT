import { useParams } from 'react-router-dom';
import EditCompanyProfile from '../components/EditCompanyProfile/EditCompanyProfile';
import ProfileSidebar from '../components/ProfileSidebar/ProfileSidebar';
import {companyProfileMain} from './CompanyProfilePage.module.css'

const CompanyProfilePage = () => {
    const { companyId } = useParams();
    return (
        <main className={`${companyProfileMain}`}>
            <ProfileSidebar id={companyId} />
            <EditCompanyProfile id={companyId} />
        </main>
    );
};
export default CompanyProfilePage;
