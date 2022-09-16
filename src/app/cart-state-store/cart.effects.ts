import { Injectable } from "@angular/core";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { FruitsService } from "../services/fruits.service";
import { fruitData, successFruitData } from "./cart.actions";
import { map, mergeMap, switchMap } from "rxjs/operators"
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FruitsEffects {
  constructor(private actions$: Actions,
    private fruitsServices: FruitsService) {

  }

  fruits$ = createEffect(() => {
    // debugger
    return this.actions$.pipe(
      ofType(fruitData),
      mergeMap((action) => {
        // debugger
        console.log("action", action);
        // return this.fruitsServices.getFruitsData().map((data: any) => {
        //   // new increment({ data }),
        //   // catchError(error=>of  new increment({ error }))
        //   console.log("serviceData", data);
        //   console.log(successFruitData({ payload: data }));

        // });
        return of(successFruitData({ payload: this.fruitsServices.getFruitsData() }));
        // return this.fruitsServices.getFruitsData().pipe(map( (data:any) =>{
        //   return successFruitData({payload:data})
        // }))
      }))
  })
}

