import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { FruitsEffects } from "./cart-state-store/cart.effects";
import { HttpClientModule } from '@angular/common/http';
// import {  cartReducerEntries } from "./cart-state-store/cartshop.reducer";
import { reducer } from "./cart-state-store/store";
import { ShopProductsComponent } from "./shop-products/shop-products.component";
const routes: Routes = [{
  path:'fruitsProducts',
  component:ShopProductsComponent
}]

@NgModule({
  declarations: [
    ShopProductsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("fruitsData",reducer),
    // StoreModule.forFeature('cartEntries',cartReducerEntries),
    EffectsModule.forFeature([FruitsEffects])

  ]
})

export class FruitsModule { }
