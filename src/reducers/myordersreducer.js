import { ORDERS } from '../actions/actiontypes';

const orderdata = []

export const orderReducer = (state = orderdata, action) => {
    switch (action.type) {

        case ORDERS:
            return action.payload

        default:
            console.log(state)
            return state;
    }
}

