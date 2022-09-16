import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { getfruits } from '../cart-state-store/cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  counterData: any;
  price: any;
  res = [];
  countProducts$ = this.store.select(getfruits);


  takeUntil$ = new Subject()
  constructor(private store: Store) {
  }

  ngOnInit(): void {
    


    this.countProducts$.pipe(takeUntil(this.takeUntil$)).subscribe((res: any) => {
      debugger
      if (res?.fruitsData) {
        this.res = res;

        this.counterData = res?.fruitsData?.counter;
        this.price = res?.fruitsData?.totalPrice;

      }
    })
  }


}
