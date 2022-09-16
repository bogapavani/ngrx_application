import { cartReducer } from './cart-state-store/cart.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
// import { ShopProductsComponent } from './shop-products/shop-products.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { HomeComponent } from './home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { FruitsEffects } from './cart-state-store/cart.effects';
import { reducer } from './cart-state-store/store';
// import { cartReducer } from './cart-state-store/cartshop.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopCartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducer),
    HttpClientModule,
    EffectsModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
