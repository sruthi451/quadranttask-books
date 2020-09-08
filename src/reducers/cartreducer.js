import { ADD_TO_CART, Buy_Checkout ,REMOVE_CART} from '../actions/actiontypes';


const cartdata = {
    cartDetail: [],
}

export const cartReducer = (state = cartdata, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            return {
                cartDetail: [...state.cartDetail, action.payload]
            };
        case REMOVE_CART:
            return {
                cartDetail: [...state.cartDetail, action.payload]
            };
       
        default:
            console.log(state)
            return state;
    }
}

const buydata = {
    itemdata :[]
}

export const buyReducer = (state = buydata, action) => {
    switch (action.type) {

        case Buy_Checkout:
            return {
                itemdata: [action.payload]
            };

        default:
            console.log(state)
            return state;
    }
}

