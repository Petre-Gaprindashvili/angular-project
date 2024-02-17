import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeletecartitemsService {

  constructor(private http:HttpClient) { }

  deleteCartItemsFromBasket(id:number){
  return  this.http.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`)
  }
 
}
