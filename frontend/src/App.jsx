import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PrivateUserProfilePage from './pages/PrivateUserProfilePage';
import CompaniesListPage from './pages/CompaniesListPage';
import CompanyProfilePage from './pages/CompanyProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer/Footer';
import SingleCompanyPage from './pages/SingleCompanyPage';
import CreateCompanyPage from './pages/CreateCompanyPage';
import UserRatingsPage from './pages/UserRatingsPage';
import ConfigPage from './pages/ConfigPage';
import CreateRatingPage from './pages/CreateRatingPage';
import NewEmployeePage from './pages/NewEmployeePage';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/users/login' element={<LoginPage />} />
                <Route path='/users/register' element={<SignUpPage />} />
                <Route path='/users' element={<PrivateUserProfilePage />} />
                <Route
                    path='/users/ratings/:userId'
                    element={<UserRatingsPage />}
                />
                <Route
                    path='/users/profile/settings'
                    element={<ConfigPage />}
                />
                <Route path='/companies' element={<CompaniesListPage />} />
                <Route
                    path='/companies/:companyId'
                    element={<SingleCompanyPage />}
                />
                <Route
                    path='/companies/profile'
                    element={<CreateCompanyPage />}
                />
                <Route
                    path='/ratings/companies/:companyId'
                    element={<CreateRatingPage />}
                />
                <Route
                    path='/companies/employee/register/:companyId'
                    element={<NewEmployeePage />}
                />
                <Route
                    path='/companies/profile/:companyId'
                    element={<CompanyProfilePage />}
                />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
