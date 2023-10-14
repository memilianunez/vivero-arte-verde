import Item from "../Item/Item";

const ItemList = ({ products}) => {
    return(
        <div className="d-flex flex-wrap justify-content-center m-2">

            {products.map((product) => (
                <Item 
                price={product.price}
                key={product.id} 
                id={product.id} 
                name={product.title} 
                description={product.description}
                category={product.category}
                color={product.color}
                img={`../src/assets/productos/${product.img}`}/>
            ))}
            
        </div>
    );
};

export default ItemList;