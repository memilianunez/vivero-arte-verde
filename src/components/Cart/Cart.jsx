import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import styles from "./Cart.module.css";


const Cart = () => {
    const { cart, removeItem, clear } = useContext(CartContext);


    return (
        <div className={styles.window}>
            <h1 className="text-center mb-4 mt-4">Carrito</h1>
            <div className="container-fluid">
                
                {cart.length >= 1 ? (
                    cart.map((item) => (
                    
                        <div key={item.id.id} className="mt-4">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={`../src/assets/gorras/${item.id.img}`} alt={item.id.description} className={styles.imgSize} />
                                <div className="mx-5">
                                    <h3 className="mb-4">{item.id.name}</h3>
                                    <p>{item.id.description}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p> <span>Precio unitario:</span> €{item.id.price}</p>
                                </div>
                                <button onClick={() => removeItem(item.id)} className="ms-5 badge text-bg-danger"> X </button>
                            </div>
                        </div>
                    )))  : <h3 className="text-center"> El carrito esta vacio </h3>
                }
                <div className="my-5 d-flex justify-content-center">   
                    {cart.length == 0 ?
                        <div>
                            <button onClick={clear} className="btn btn-danger" disabled> Eliminar Carrito </button>
                        </div>  :
                        <div>
                            <button onClick={clear} className="btn btn-danger"> Eliminar Carrito </button>
                            <Link to='/checkout' className="btn btn-primary ms-2">Checkout</Link>
                        </div>} 
                </div>
            </div>  
        </div>
    );
};

export default Cart;