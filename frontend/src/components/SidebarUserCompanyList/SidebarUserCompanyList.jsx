import { Link } from "react-router-dom";

const SidebarUserCompanyList = ({ userInfo }) => {
  return (
    <>
      {userInfo?.companyId ||
        (userInfo[0]?.companyId && (
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
        ))}
      <Link to={`/companies/profile`}>
        <h3>Crear nueva empresa</h3>
      </Link>
    </>
  );
};
export default SidebarUserCompanyList;
