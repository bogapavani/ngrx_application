
import { createAction, props } from '@ngrx/store';

export const addProduct = createAction('[Cart] Add Product', props<{ payload: any }>());
export const removeProduct = createAction('[Cart] Remove Product', props<{ payload: any }>());
export const clearCart = createAction('[Cart] Clear Cart');

export const fruitData = createAction("[friutData] Get FruitData");
export const successFruitData = createAction("[fruit Data] Get friut Data Success", props<{ payload: any }>());
