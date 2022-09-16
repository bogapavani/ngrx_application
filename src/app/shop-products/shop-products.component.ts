import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addProduct } from './../cart-state-store/cart.actions';
import { Product } from '../model/product';
import { FruitsService } from '../services/fruits.service';
import * as ActionData from "../cart-state-store/cart.actions"
import { Observable, Subject, takeUntil } from 'rxjs';
import { FruitData } from '../cart-state-store/cart.reducer';
import { getfruits } from '../cart-state-store/cart.selectors';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css']
})
export class ShopProductsComponent implements OnInit {
  fruitsData: any;
  fruits: any;
  res: any;
  // list: any = [];
  finalData: any;
  list: any = [];
  totalFruits$!: Observable<FruitData>
  takeUntil$ = new Subject;
  counterValue: any;
  rest: any;
  totalData: any;
  FruitsNumber$ = this.store.pipe(select(getfruits))
  constructor(private store: Store,
    private fruitservice: FruitsService,
    private router: Router) { }

  ngOnInit(): void {

    this.store.dispatch(ActionData.fruitData());
    this.FruitsNumber$.pipe(takeUntil(this.takeUntil$)).subscribe((res: any) => {
      this.totalData = res?.fruitsData;
      this.res = res?.fruitsData?.data
      this.counterValue = res?.fruitsData.counter
    })
  }

  buyProduct(selectedData: any, count = 0) {
    this.list.push(selectedData)
    debugger
    let price = 0;
    price = price + selectedData?.price;

    const payload = {
      counter: count + 1,
      totalPrice: price,
      requireData: selectedData,
      list: selectedData
    }

    debugger
    this.store.dispatch(addProduct({ payload }));
  }
}
