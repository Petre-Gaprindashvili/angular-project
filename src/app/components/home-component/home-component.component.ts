import { Component, OnInit } from '@angular/core';
import { ServiceCategoriesService } from 'src/app/services/service-categories.service';
import { GategoryData } from 'src/app/interfaces/gategory-data';
import { CategoryId } from 'src/app/interfaces/category-id';
import { CartAddingServiceService } from 'src/app/services/cart-adding-service.service';
import { identifierName } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

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
      this.categories.activeCategoryId.next(response[99].id)
      
      
      
      
      
      
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
    

          
       })
      }
          
            
            
            
            
    
          
           
  


     
      addTocartt(id:number,price:number){

        const existingProduct = this.cartadding.cartItems.find(
          (item: any) => item.product.id === id
        );
        if (existingProduct) {
          this.cartadding
            .updateToBaketProducts({
              price: existingProduct.price,
              productId: id,
              quantity: existingProduct.quantity + 1,
            })
            .subscribe((response) => {
              existingProduct.quantity += 1;
          
              alert("hhhhhhhhhhh");
            });

          } else{
    const DAta= { 
              productId:id,
              quantity:1,
              price
            }
    this.cartadding.addToBaskett(DAta).subscribe((response=>{
      this.cartadding.addedNewCartitemsObservable.next(1);
      this.cartadding
      .getAllToBasket()
      .subscribe((response) => {
        this.cartadding.cartItems = response;
      })
      alert("add")
    }))
          
        }
      }
   


      filterHandler(formValue:NgForm){


      
      
       if(this.categories.activeCategoryId.value){

        
      

         this.categories.getAllFiltered({
           nuts:formValue.value.nuts,
           vegeterian:formValue.value.vegeterian,
           spiciness:formValue.value.spiciness,
           categoryId: this.categories.activeCategoryId.value
          
          
           
           
           
          }).subscribe((response=>{
            this.productlist = response
            
          }))
        }
        }
}
    
  















