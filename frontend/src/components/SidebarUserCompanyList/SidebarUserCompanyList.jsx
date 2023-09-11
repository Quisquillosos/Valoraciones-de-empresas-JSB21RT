import { Link } from "react-router-dom";

const SidebarUserCompanyList = ({ userInfo }) => {
  return (
    <>
      <h3>Mis Empresas</h3>
      <ul>
        {userInfo.map((company) => {
          return (
            <li key={company?.name}>
              <Link to={`/companies/profile/${company?.companyId}`}>
                {company?.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default SidebarUserCompanyList;
