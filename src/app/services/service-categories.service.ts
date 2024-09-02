import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GategoryData } from '../interfaces/gategory-data';
import { CategoryId } from '../interfaces/category-id';
import { Addedcartitemsdetail } from '../interfaces/addedcartitemsdetail';
import { environment } from 'src/environments/environment.development';



import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCategoriesService {

  constructor(private http:HttpClient) {  }
  activeCategoryId = new BehaviorSubject<number|null>(null); 

getAllCategories(){
 return  this.http.get<GategoryData[]>(`${environment.ApiUrl}/api/Categories/GetAll`)
}


getAllProducts( 

){
  return this.http.get<CategoryId[]>(`${environment.ApiUrl}/api/Products/GetAll`)
}

getCategoryById(id:number){
  return this.http.get<{id:number; name:string;  products: CategoryId[]}>(`${environment.ApiUrl}/api/Categories/GetCategory/${id}`)
}

getAllFiltered(filterData:{
  nuts:boolean;
  vegeterian:boolean;
  spiciness:number;
  categoryId:number;
  
}){ 
 return this.http.get<CategoryId[]>(`${environment.ApiUrl}/api/Products/GetFiltered?nuts=${filterData.nuts}&vegeterian=${filterData.vegeterian}&spiciness=${filterData.spiciness}&categoryId=${filterData.categoryId}`)
}





getAllToBasket(){
  return this.http.get<Addedcartitemsdetail[]>(`${environment.ApiUrl}/api/Baskets/GetAll`)
 
}


getAllRooms(){
  return this.http.get<any>('https://freeapi.miniprojectideas.com/api/HotelBooking/GetAllRooms')
}






}
