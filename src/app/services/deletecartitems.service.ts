import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Addedcartitemsdetail } from '../interfaces/addedcartitemsdetail';

@Injectable({
  providedIn: 'root'
})
export class DeletecartitemsService {

  constructor(private http:HttpClient) { }
  deleteItemsFromBasket(prole:{ id:number; quantity:number; price:number; deletion: number}){
  return this.http.delete(`https://restaurant.webwide.ge/api/Baskets/DeleteProduct/${prole.id}`)
  }
}
