import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PrivateUserProfilePage from "./pages/PrivateUserProfilePage";
import PublicProfileUserPage from "./pages/PublicProfileUserPage";
import CompaniesListPage from "./pages/CompaniesListPage";
import CompanyProfilePage from "./pages/CompanyProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/users/login" element={<LoginPage/>} />
        <Route path="/users/register" element={<SignUpPage/>} />
        <Route path="/users" element={<PrivateUserProfilePage/>} />
        <Route path="/users/:userId" element={<PublicProfileUserPage/>} />
        <Route path="/companies" element={<CompaniesListPage/>} />
        <Route path="/companies/:companyId" element={<CompanyProfilePage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
