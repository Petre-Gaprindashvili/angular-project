import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GategoryData } from '../interfaces/gategory-data';
import { CategoryId } from '../interfaces/category-id';
import { Addedcartitemsdetail } from '../interfaces/addedcartitemsdetail';



import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCategoriesService {

  constructor(private http:HttpClient) {  }
  activeCategoryId = new BehaviorSubject<number|null>(null); 

getAllCategories(){
 return  this.http.get<GategoryData[]>('https://restaurant.stepprojects.ge/api/Categories/GetAll')
}


getAllProducts( 

){
  return this.http.get<CategoryId[]>(`https://restaurant.stepprojects.ge/api/Products/GetAll`)
}

getCategoryById(id:number){
  return this.http.get<{id:number; name:string;  products: CategoryId[]}>(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
}

getAllFiltered(filterData:{
  nuts:boolean;
  vegeterian:boolean;
  spiciness:number;
  categoryId:number;
  
}){ 
 return this.http.get<CategoryId[]>(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?nuts=${filterData.nuts}&vegeterian=${filterData.vegeterian}&spiciness=${filterData.spiciness}&categoryId=${filterData.categoryId}`)
}





getAllToBasket(){
  return this.http.get<Addedcartitemsdetail[]>('https://restaurant.stepprojects.ge/api/Baskets/GetAll')
 
}



}
