
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { addProduct, clearCart, fruitData, removeProduct, successFruitData } from './cart.actions';

export interface FruitData {
  fruitsData: {
    data: null,
    isLoading: boolean,
    error: null,
    counter: number,
    totalPrice: number,
    requireData: null,
    list: []
  }
}

export const initialState: FruitData = {
  fruitsData: {
    data: null,
    isLoading: false,
    error: null,
    counter: 0,
    totalPrice: 0,
    requireData: null,
    list: []
  }
}
export function cartReducer() {

  return createReducer(
    initialState,
    on(fruitData, (state) => {
      // debugger
      return {
        ...state,
        fruitsData: {
          ...state.fruitsData,
          data: null,
          isLoading: true,

          error: null,
          counter: 0,
          totalPrice: 0,
          requireData: null,
          list: []
        },
      };
    }),
    on(successFruitData, (state: any, action: any) => {
      return {
        ...state,
        fruitsData: {
          ...state.fruitsData,
          isLoading: false,
          data: action.payload,
          error: null,
          counter: 0,
          totalPrice: 0,
          requireData: null,
          list: []
        }
      }
    }),
    on(addProduct, (state: any, action: any) => {
      const getData = {
        requireData: action.payload?.requireData,
      }
      console.log("list", [getData.requireData]);
      debugger
      return {
        ...state,
        fruitsData: {
          ...state.fruitsData,
          isLoading: false,
          // data: action.payload,
          error: null,
          counter: action.payload?.counter,
          totalPrice: action.payload?.totalPrice + action.payload?.totalPrice,
          requireData: action.payload?.requireData,
          list: [...state.fruitsData.list, getData],
        }
      }
    }), on(clearCart, (state: any, action: any) => {
      debugger
      return {
        ...state,
        fruitsData: {
          ...state.fruitsData,
          data: null,
          isLoading: true,
          error: null,
          counter: 0,
          totalPrice: 0,
          requireData: null,
          list: null
        },
      }
    })

  )

}




