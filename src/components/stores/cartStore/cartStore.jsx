import {createStore} from 'redux';
import cartReducer from "../../reducers/cartReducer/cartReducer";

const cartStore = createStore(cartReducer)

export default cartStore;