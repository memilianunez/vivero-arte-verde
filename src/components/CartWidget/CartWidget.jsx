import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Cart from "../../assets/cart.png";
import { cartQuantity } from "../../utils";

const CartWidget = () => {
    const {cart} = useContext(CartContext);

    const quantity = cartQuantity(cart);

    return (
        <Link to={'/cart'}>
            <img src={Cart} alt="imagen de carrito" />
            {quantity > 0 ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                +{quantity}
            </span> : null}
            
        </Link>
    );
};

export default CartWidget