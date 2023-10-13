import { Link } from "react-router-dom";
import { ArrowLeft } from 'react-bootstrap-icons';

const BtnBack = ({ to }) => {
    return (
        <Link
            to={to}
            className="btn btn-light m-1">
            <div className="d-flex align-items-center justify-content-center">
                <ArrowLeft />
                <p className="text-center ms-2 mb-0">Atras</p>
            </div>
        </Link>
    );
};

export default BtnBack;
