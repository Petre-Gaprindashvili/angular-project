import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cartdatadetails } from '../interfaces/cart-datadetails';
import { environment } from 'src/environments/environment.development';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartAddingServiceService {

  constructor(private http:HttpClient) {}
  
  // cartItems: cartdatadetails = [];
  addedNewCartitemsObservable = new Subject<number>()
  cartItems: any = [];


  addToBaskett(productData:cartdatadetails){
return this.http.post(`${environment.ApiUrl}/api/Baskets/AddToBasket`, productData)
  }


  getAllToBasket(){
    return this.http.get<cartdatadetails[]>(`${environment.ApiUrl}/api/Baskets/GetAll`)
   
  }
updateToBaketProducts(datas:cartdatadetails)

 {
  return this.http.put<any>(`${environment.ApiUrl}/api/Baskets/UpdateBasket`,
  datas)
}


}
