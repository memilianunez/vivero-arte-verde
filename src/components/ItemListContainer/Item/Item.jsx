import {Link} from 'react-router-dom';
import styles from "./Item.module.css";

const Item = (product) => {
    return (
        <div key={product.id}> 
            <div className={`${styles.estiloCard} m-3`} style={{width: "18rem"}}>
                <img src={`${product.img}`} className="card-img-top rounded" alt={product.title}/>
                <div className="my-2 text-center">
                    <h5 className="">{product.title}</h5>
                    <p className="m-1 mb-5">Precio: $ {product.price}</p>
                    <Link 
                        className={`${styles.button} container`}
                        to={`/item/${product.id}`}>
                            <svg>
                                <rect
                                    x="0" y="0" 
                                    fill="none"
                                    width="100%"
                                    height="100%"
                                />
                            </svg>
                            Ver Mas
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Item;