import {ADD_TO_CART} from "../types";

const cartReducer = (initialstate = [],action) => {
    switch (action.type){
        case ADD_TO_CART:
            const item = action.item
            // initialstate.push(action.item);
            return [...initialstate,item];
        default:
            return initialstate;
    }
    

}
export default cartReducer;