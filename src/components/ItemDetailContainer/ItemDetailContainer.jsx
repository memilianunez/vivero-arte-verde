import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetailContainer/ItemDetail/ItemDetail";
import IsLoading from "../IsLoading/IsLoading";
import { getProduct } from "../../services/products";
import styles from "./ItemDetailContainer.module.css";




const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    

    useEffect(() => {
        
        getProduct(id)
            .then((response) => {
                setProduct(response);
            })
            .catch(() => {
                setProduct(null);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [id]);

    return (
        <div className={`${styles.backgroundColor} p-2`}>
            {isLoading ? 
                <IsLoading />:
                <ItemDetail product={product} />}
        </div>
    );
};

export default ItemDetailContainer;
