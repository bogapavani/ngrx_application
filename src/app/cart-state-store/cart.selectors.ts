import { createSelector } from '@ngrx/store';
import { fruitDataState } from './store';

export const getfruits = createSelector(fruitDataState, (state) => {
  console.log("data", state?.fruitData?.fruitsData?.list);
  return state?.fruitData
})
export const getSelectedProductList = createSelector(fruitDataState, (state) => {
  console.log("data", state?.fruitData?.fruitsData?.list);
  return state?.fruitData?.fruitsData?.list
})





