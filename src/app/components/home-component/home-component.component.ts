import { Component, OnInit } from '@angular/core';
import { ServiceCategoriesService } from 'src/app/services/service-categories.service';
import { GategoryData } from 'src/app/interfaces/gategory-data';
// import { ProductsData } from 'src/app/interfaces/products-data';
import { CategoryId } from 'src/app/interfaces/category-id';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  constructor(public categories:ServiceCategoriesService){}
  categoriesData:GategoryData[] = [];
  productlist: CategoryId[]=[];
  // productsData: ProductsData[]=[];
  clickActiveHandler(id:number){
 this.categories.activeCategoryId.next(id);



  }
  ngOnInit(): void {
    this.categories.getAllCategories().subscribe((response=>{
      this.categoriesData = response;
    }))
    
    this.categories.activeCategoryId.subscribe((id)=>{
      this.categories.getCategoryById(this.categories.activeCategoryId.value as number).subscribe((info=>{
        this.productlist = info.products
            }))
    })
    // this.categories.getAllproducts().subscribe((respons)=>{
    //   this.productsData = respons
    // })
  }

 

}
