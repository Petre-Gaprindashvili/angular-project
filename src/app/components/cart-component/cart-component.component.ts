import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { ServiceCategoriesService } from 'src/app/services/service-categories.service';
import { DeletecartitemsService } from 'src/app/services/deletecartitems.service';
import { CartAddingServiceService } from 'src/app/services/cart-adding-service.service';
import { cartdatadetails } from 'src/app/interfaces/cart-datadetails';
import { Addedcartitemsdetail } from 'src/app/interfaces/addedcartitemsdetail';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {
constructor(private manager:ServiceCategoriesService,private deletedservice:DeletecartitemsService,public cartadding:CartAddingServiceService){}
addedItemsCartList: Addedcartitemsdetail[]=[];
// deleteedproduct: Addedcartitemsdetail[ ]= []

cartItems:cartdatadetails[] =[]
totalNumberOfCart = 0;
ngOnInit(): void {


  this.cartadding.getAllToBasket().subscribe((response=>{
    this.cartadding.cartItems =response
    // this.totalNumberOfCart = response.length
    this.calculateTotalPrice();
  }))
  
  
  this.cartadding.addedNewCartitemsObservable.subscribe((data=>{
    this.totalNumberOfCart += data
  }))
  
  
  this.manager.getAllToBasket().subscribe((response=>{
    this.addedItemsCartList = response
  }))
}


calculateTotalPrice() {
  this.cartadding.cartItems.forEach((element: any) => {
    const currentTotal = element.quantity * element.product.price;
    this.totalNumberOfCart += currentTotal;
  });
}



deletecartitems(id:number){
  this.deletedservice.deleteCartItemsFromBasket(id).subscribe(() =>{
this.addedItemsCartList = this.addedItemsCartList.filter((items:Addedcartitemsdetail)=>items.product.id != id)

this.totalNumberOfCart = 0;
this.calculateTotalPrice();
  })


}


}




