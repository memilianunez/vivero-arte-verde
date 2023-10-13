import "./link.css";
import { NavLink } from "react-router-dom";


const Link = ({link, nombre}) => { 
    return <NavLink
        to={link}
        className={({ isActive }) => (isActive ? "linkNavegacion" : "link")}>
        {nombre}
    </NavLink> 
};

export default Link;