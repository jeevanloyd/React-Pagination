/* eslint-disable import/no-anonymous-default-export */

const ADD_PRODUCT = "add_product";

export const addProduct = () => ({
    type: ADD_PRODUCT,
});


let initialState = {
    products: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            state.products.push(action.product);
            return state;
        default:
            return state;
    }
};
