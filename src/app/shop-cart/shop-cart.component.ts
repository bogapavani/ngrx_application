import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

import * as ActionData from "../cart-state-store/cart.actions"
import { clearCart } from '../cart-state-store/cart.actions';
import { getfruits, getSelectedProductList } from '../cart-state-store/cart.selectors';
import { addProduct, removeProduct } from './../cart-state-store/cart.actions';


@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {
  cartEntries$: any;
  takeUntil$ = new Subject;
  totalData: any;
  convertedData: any;
  FruitsNumber$ = this.store.pipe(select(getSelectedProductList))
  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.cartEntries$;
    this.FruitsNumber$.pipe(takeUntil(this.takeUntil$)).subscribe((res: any) => {
      this.totalData = res;
      console.log("he", this.totalData);

    })
  }

  clearEntries() {
    this.store.dispatch(clearCart());
  }

  more(entry: any) {
    this.store.dispatch(addProduct(entry.product));

  }

  less(entry: any) {
    this.store.dispatch(removeProduct(entry.product));
  }

}
