import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ShopProductsComponent } from './shop-products/shop-products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'fruits',
    loadChildren: () => import('./fruits.module').then((m) => m.FruitsModule)

  },
  // { path: 'fruits', component: ShopProductsComponent },
  { path: 'shopcart', component: ShopCartComponent },
  { path: '**', component: ShopProductsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
