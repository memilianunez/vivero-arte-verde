import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList/ItemList";
import IsLoading from "../IsLoading/IsLoading";
import { getProducts } from "../../services/products";
import styles from "./ItemListContainer.module.css";



const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
        
        useEffect(() => {
            setLoading(true);

            getProducts(categoryId)
                .then((response) => {
                    setProducts(response);
                    setLoading(false);
                })
        }, [categoryId]);

    return(
        <div className={`${styles.backgroundColor} p-2`}>
            {loading ?
                <IsLoading /> :
                <ItemList products={products} />
            }
        </div>
    );
};

export default ItemListContainer;