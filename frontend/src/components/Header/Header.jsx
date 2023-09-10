import { Auth } from '../Auth/Auth';
import { Link } from 'react-router-dom';
import { header } from './Header.module.css';
import Accordion from '../Accordion.jsx/Accordion';
import logoPerson from '../../../public/logoPerson.jpg';

const Header = () => {
    return (
        <header className={`${header} `}>
            <Link to='/'>
                <img src='' alt='' />
            </Link>
            <nav>
                <ul>
                    <li>Buscador</li>
                    <li>Lang</li>
                    <li>
                        <Accordion imgSrc={logoPerson}>
                            <Auth />
                        </Accordion>
                    </li>
                    <li>
                        <Accordion>Hamburguesa</Accordion>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
