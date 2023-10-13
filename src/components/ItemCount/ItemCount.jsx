import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./itemCount.module.css";


const ItemCount = ({onAdd, initial = 0}) => {
    const [count, setCount] = useState(initial);
    


    const aumentar = () => {
        setCount( count +1 );
    };

    const reducir = () => {
        if (count > 0)
        setCount( count -1);
    };


    return (
        <div className="mb-3">
            <div className="d-flex align-items-center mt-4">
                <button className="btn btn-secondary mx-2 badge rounded-pill text-bg-dark" onClick={reducir}>-</button>
                <p className="mx-2 mt-3 badge text-bg-light"> Cantidad: {count}</p>
                <button className="btn btn-secondary mx-2 badge rounded-pill text-bg-dark" onClick={aumentar}>+</button>

                {count > 0 ?
                    <button className={`badge rounded-pill text-dark ms-3 ${styles.hover}`} onClick={() => onAdd(count)}> Agregar al Carrito </button> :
                    <button className={`badge rounded-pill text-dark ms-3 ${styles.hover}`} disabled onClick={() => onAdd(count)}> Agregar al Carrito </button>}
                
            </div>  
            <div>
                { count >= 1 && <ToastContainer />}
            </div>
        </div>
    );
};

export default ItemCount;