import { Link } from 'react-router-dom';

const SidebarUserCompanyList = ({ userInfo }) => {
    if (!userInfo[0]?.companyId) {
        return (
            <Link to={`/companies/profile`}>
                <h3>Create new company</h3>
            </Link>
        );
    }

    return (
        <>
            {userInfo?.companyId ||
                (userInfo[0]?.companyId && (
                    <>
                        <h3>My companies</h3>
                        <ul>
                            {userInfo.map((company) => {
                                return (
                                    <li key={company?.name}>
                                        <Link
                                            to={`/companies/profile/${company?.companyId}`}
                                        >
                                            {company?.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                ))}
            <Link to={`/companies/profile`}>
                <h3>Create new company</h3>
            </Link>
        </>
    );
};
export default SidebarUserCompanyList;
