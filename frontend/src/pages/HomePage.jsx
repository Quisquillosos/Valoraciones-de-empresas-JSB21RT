import { mainHeader, mainHomePage } from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <header className={`${mainHeader} `}>
        <h1>Home Page</h1>
      </header>
      <main className={`${mainHomePage} `}>
        <section>componente TOP EMPRESAS</section>
        <section>opiniones</section>
      </main>
    </>
  );
};
export default HomePage;
