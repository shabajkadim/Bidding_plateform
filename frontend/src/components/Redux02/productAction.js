// productActions.js
export const setDataProduct = (products) => {
    return {
        type: "SET_DATA_PRODUCT",
        payload: products
    };
};

export const addCartItem = (product) => {
    return {
        type: "ADD_CART_ITEM",
        payload: product
    };
};

export const deleteCartItem = (productId) => {
    return {
        type: "DELETE_CART_ITEM",
        payload: productId
    };
};

export const incrementQty = (productId) => {
    return {
        type: "INCREMENT_QTY",
        payload: productId
    };
};

export const decrementQty = (productId) => {
    return {
        type: "DECREMENT_QTY",
        payload: productId
    };
};

export const clearCart = () => {
    return {
        type: "CLEAR_CART"
    };
};
