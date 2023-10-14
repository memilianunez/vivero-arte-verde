import { NavLink } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import Link from "../Link/Link.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx";
import styles from './NavBar.module.css';

const Navbar = () => {

    return (
        <>
            <nav className={`container-fluid d-flex justify-content-between py-2 ${styles.background}`}>
                <NavLink
                    to="/">
                    <img className={styles.logoSize} src={Logo} alt="logo" />
                </NavLink>
                <li className='d-flex align-items-center me-2'>
                    <ul className={`text-white ${styles.ulNavbar} mx-3`}>
                        <Link
                            link="/"
                            nombre="Home" />
                    </ul>
                    <ul className={`text-white ${styles.ulNavbar} mx-3`}>
                        <Link
                            link="/category/trucker"
                            nombre="Plantas" />
                    </ul>

                    <ul className={`text-white ${styles.ulNavbar} mx-3`}>
                        <Link
                            link="/category/snap"
                            nombre="Macetas" />
                    </ul>

                    <ul className={`text-white ${styles.ulNavbar} mx-3`}>
                        <Link
                            link="/category/baseball"
                            nombre="Tierra" />
                    </ul>

                    <ul className={`text-white ${styles.ulNavbar} mx-3`}>
                        <button type="button" className="btn position-relative">

                            <CartWidget />
                        </button>
                    </ul>
                </li>
            </nav>
        </>
    );
};

export default Navbar;