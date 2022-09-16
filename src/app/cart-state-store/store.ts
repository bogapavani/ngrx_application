
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store"
import * as fruitDataReducer from "./cart.reducer";

export interface CartFruitState {
  fruitData: fruitDataReducer.FruitData,

}

export const reducer: ActionReducerMap<CartFruitState> = {
  fruitData: fruitDataReducer.cartReducer(),

}


export const fruitDataState = createFeatureSelector<CartFruitState>('fruitsData');



