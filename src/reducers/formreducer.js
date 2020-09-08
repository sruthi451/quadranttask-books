import { Form_Submit } from '../actions/actiontypes';

const data = []

export const formReducer = (state = data, action) => {
    switch (action.type) {

        case Form_Submit: return action.payload
    
        
        default: return state;
    }
}

