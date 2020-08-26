import { Reducer } from "redux";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
};

//modificado para arrow function para conseguir tipar.
const cart: Reducer<ICartState> = () => {
  return INITIAL_STATE;
};

export default cart;
