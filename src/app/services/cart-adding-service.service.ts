import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cartdatadetails } from '../interfaces/cart-datadetails';
// import { Addedcartitemsdetail } from '../interfaces/addedcartitemsdetail';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartAddingServiceService {

  constructor(private http:HttpClient) {}
         
  addedNewCartitemsObservable = new Subject<number>()

  addToBaskett(productData:cartdatadetails){
return this.http.post("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", productData)
  }


  getAllToBasket(){
    return this.http.get<cartdatadetails[]>("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
   
  }


}
