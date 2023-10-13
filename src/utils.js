;export const cartQuantity = (cart) => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
}

export const cartTotal = (cart) => cart.reduce((acc, item) => acc + item.quantity * item.id.price, 0);

export const mapCartToToOrderItems = (cart) => {
    return cart.map(item => ({
        id: item.id.id,
        quantity: item.quantity,
        price: item.id.price,
        title: item.id.name,
    }));
};