import { createStore } from "redux";
import { cartReducer } from "./cartReducer/CartReducer";

const store = createStore(cartReducer);

export default store;
