import { Component, OnInit } from '@angular/core';
import { ServiceCategoriesService } from 'src/app/services/service-categories.service';
import { GategoryData } from 'src/app/interfaces/gategory-data';
import { CategoryId } from 'src/app/interfaces/category-id';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})


export class HomeComponentComponent implements OnInit {
  constructor(public categories:ServiceCategoriesService){}
  allProducts:CategoryId []=[]
  categoriesData:GategoryData[] = [];
  productlist:CategoryId[]=[];
  clickActiveHandler(id:number){
 this.categories.activeCategoryId.next(id);
  }



  ngOnInit(): void {
    this.categories.getAllCategories().subscribe((response=>{  
      this.categoriesData = response;
      // this.categories.activeCategoryId.next(response[6].id)

    }))


     this.categories.activeCategoryId.subscribe((id)=>{


      if(id){

        this.categories.getCategoryById(this.categories.activeCategoryId.value as number).subscribe((info=>{
          this.productlist = info.products
          
        }))
      } 
        else{
          this.categories.getAllProducts().subscribe(( all=>{
            this.allProducts = all;
            this.categories.activeCategoryId
             return
            
          }))
        }
      

        
          
        })
        
        
      }
      
   

}
    
  
















