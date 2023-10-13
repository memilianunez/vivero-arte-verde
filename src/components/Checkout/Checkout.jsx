import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { cartTotal, mapCartToToOrderItems } from "../../utils";
import Field from "./Field/Field";
import BtnBack from "../BtnBack/BtnBack";
import styles from "./Checkout.module.css";


const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState("");
    const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    });
    const { name, email, phone } = formState;

    const { cart, clear } = useContext(CartContext);

        const onChange = (event) => {
        setFormState({
        ...formState,
        [event.target.name]: event.target.value,
        });
    };

    const isFormValid = name && email && phone;

    
    const createOrder = (event) => {
        event.preventDefault();

        if (isFormValid) {
            const order = {
                buyer: formState,
                items: mapCartToToOrderItems(cart),
                total,
                date: serverTimestamp(),
            };

            const db = getFirestore();;

            const orderCollection = collection(db, "orders");

            addDoc(orderCollection, order)
                .then((docRef) => {
                    setOrderId(docRef.id)
                    console.log("Orden Creada con ID", docRef.id);
                })
                .catch((err) => {
                    console.log("Error al crear la orden:", err)
                })
            clear();
        };
    };

    if (loading) {
        return <h2>Se esta generando la orden...</h2>
    };

    if (orderId) {
        return <h2 className={`text-center pt-5 mb-0 ${styles.window}`}> Orden generada con el id: {orderId}</h2>
    };


    const total = cartTotal(cart);


    return (
        
        <div className={styles.window}>
            <BtnBack to="/cart" />

            <form onSubmit={createOrder}>
                <h2 className="text-center mt-3">Ingresa tus datos para completar la compra 🛍</h2>
                <div className="container p-2">
                    <div className="d-flex justify-content-center">
                        <Field label="Nombre:" name="name" type="text" placeholder="John" onChange={onChange} />
                        <Field label="Apellido:" name="apellido" type="text" placeholder="Whick" onChange={onChange} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <Field label="Email:" name="email" type="email" placeholder="John@gmail.com" onChange={onChange} />
                        <Field label="Telefono:" name="phone" type="tel" placeholder="1131023361" onChange={onChange} />
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-success w-25 mx-auto" disabled={!isFormValid} type="submit"> Crear orden </button>
                    </div>
                    
                </div>
                
            </form>

            <ul className="">
                {cart.map(item => (
                    <li className={`${styles.liStyle} mt-5`} key={item.id}>
                        <div key={item.id.id} className="mt-4">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={`../src/assets/gorras/${item.id.img}`} alt={item.id.description} className={styles.imgSize} />
                                <div className="mx-5">
                                    <h4 className="mb-4">{item.id.name}</h4>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p> <span>Precio por unidad:</span> €{item.id.price}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            

            <h3 className="mx-auto my-3">Total de la Compra: € {total}</h3>
            
        </div>
    );
};

export default Checkout;
