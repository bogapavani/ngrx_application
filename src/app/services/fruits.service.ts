import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from "../model/product";
@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  fruitsData = [
    {
    id: 1,
    name: "Apples",
    description: "Daily one apple keep a doctor away!",
    price: 40.99,
    image: './assets/download (1).jfif'
  }, {
    id: 2,
    name: "Mango",
    description: "Favourite fruits for all peoples!",
    price: 35.00,
    image: './assets/download (2).jfif'
  }, {
    id: 3,
    name: "Pineapple",
    description: "Good for health!",
    price: 21.15,
    image: './assets/download.jfif',
  }
]
  fruitsDatas: void | undefined;

  constructor(private http: HttpClient) { }

  getFruitsData(): any {
    this.fruitsDatas = Object.assign(this.fruitsData)
    console.log("api", this.fruitsDatas);

    return this.fruitsDatas;
  }

}
