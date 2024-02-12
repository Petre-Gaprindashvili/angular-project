import { Component, OnInit } from '@angular/core';
import { ServiceCategoriesService } from 'src/app/services/service-categories.service';
import { GategoryData } from 'src/app/interfaces/gategory-data';
import { CategoryId } from 'src/app/interfaces/category-id';
import { CartAddingServiceService } from 'src/app/services/cart-adding-service.service';
import { identifierName } from '@angular/compiler';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})


export class HomeComponentComponent implements OnInit {
  constructor(public categories:ServiceCategoriesService, private cartadding:CartAddingServiceService){}
  // allProducts:CategoryId []=[]
  categoriesData:GategoryData[] = [];
  productlist:CategoryId[]=[];
  clickActiveHandler(id:number){
 this.categories.activeCategoryId.next(id);
  }
  



  ngOnInit(): void {

   
   

   

    this.categories.getAllCategories().subscribe((response=>{  

      this.categoriesData = response;
      // this.categories.activeCategoryId.next(response[7].id)
      
      
      
      
      
      
    }))
    
    this.categories.activeCategoryId.subscribe((id)=> {
      
      if(id){
          

              this.categories.getCategoryById(id as number).subscribe((info=>{
                this.productlist = info.products 
                
                  
                
              }))
            }  

      else{
        
        this.categories.getAllProducts().subscribe((all=>{ 
          this.productlist = all
       

        }))  
        
  
      }
      // 
    

          
       })
      }
          
            
            
            
            
            
          
          
          
  



     
      addTocartt(id:number,price:number){
        const DAta= {
          productId:id,
          quantity:id,
          price
        }
this.cartadding.addToBaskett(DAta).subscribe((response=>{
  this.cartadding.addedNewCartitemsObservable.next(1)
    alert("added")
}))
      }
    
   


      filterHandler(formValue:NgForm){
        console.log(formValue.form.value)
        }
}
    
  















