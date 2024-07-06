// productReducer.js
const initialState = {
    productList: [],
    cartItem: []
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DATA_PRODUCT":
            return {
                ...state,
                productList: action.payload
            };
        case "ADD_CART_ITEM":
            const check = state.cartItem.some(el => el._id === action.payload._id);
            if (check) {
                alert("Item already added");
                return state;
            } else {
                alert("Add item successfully");
                const total = action.payload.price;
                return {
                    ...state,
                    cartItem: [...state.cartItem, { ...action.payload, qty: 1, total }]
                };
            }
        case "DELETE_CART_ITEM":
            const updatedCart = state.cartItem.filter(el => el._id !== action.payload);
            alert("One product deleted");
            return {
                ...state,
                cartItem: updatedCart
            };
        case "INCREMENT_QTY":
            const incrementedCart = state.cartItem.map(el => {
                if (el._id === action.payload) {
                    const qty = el.qty + 1;
                    return { ...el, qty, total: qty * el.price };
                }
                return el;
            });
            return {
                ...state,
                cartItem: incrementedCart
            };
        case "DECREMENT_QTY":
            const decrementedCart = state.cartItem.map(el => {
                if (el._id === action.payload && el.qty > 1) {
                    const qty = el.qty - 1;
                    return { ...el, qty, total: qty * el.price };
                }
                return el;
            });
            return {
                ...state,
                cartItem: decrementedCart
            };
        case "CLEAR_CART":
            return {
                ...state,
                cartItem: []
            };
        default:
            return state;
    }
};

export default productReducer;
