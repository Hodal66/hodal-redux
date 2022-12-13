import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFiveItemsAtOnce,
  addItem,
  deleteFiveItemsAtOnce,
  deleteItem,
} from "../actions/CartAction";

function Cart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("Now my store :", state.numOfItem);
  return (
    <div className="container">
      <h1>🌝 Hodal Testing Redux ✅</h1>
      <div className="topButtons">
        <button className="blue" onClick={() => dispatch(addItem())}>
          Add To Cart
        </button>
        <button className="blue" onClick={() => dispatch(addFiveItemsAtOnce())}>
          Add 5 To Cart
        </button>
      </div>

      <h3>
        Number of Item{state.numOfItem > 1 && "s"} in the car :{state.numOfItem}
      </h3>

      <div className="bottomButtons">
        <button
          className="red"
          disabled={state.numOfItem > 0 ? false : true}
          onClick={() => dispatch(deleteItem())}
        >
          Remove From Cart
        </button>
        <button
          className="red"
          disabled={state.numOfItem > 0 ? false : true}
          onClick={() => dispatch(deleteFiveItemsAtOnce())}
        >
          Remove 5 from Cart
        </button>
      </div>
      <p className="red">
        {" "}
        {state.numOfItem === 0 ? "⚠️Your Store is Empty" : ""}
      </p>
    </div>
  );
}

export default Cart;
