import styles from "./Footer.module.css";


const Footer = () => {
    return (
        <footer className={`container-fluid ${styles.footer} p-1`}>
            <p className="text-center text-light">Copyright © 2023 Vivero Arte Verte · Todos los derechos reservados.</p>
            </footer>
    );
};

export default Footer;