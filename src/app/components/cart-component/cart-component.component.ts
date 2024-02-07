import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { ServiceCategoriesService } from 'src/app/services/service-categories.service';
import { DeletecartitemsService } from 'src/app/services/deletecartitems.service';
import { Addedcartitemsdetail } from 'src/app/interfaces/addedcartitemsdetail';
// import { Addedcartitemsdetail } from 'src/app/interfaces/addedcartitemsdetail';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {
constructor(private manager:ServiceCategoriesService,private deletedservice:DeletecartitemsService){}
addedItemsCartList: Addedcartitemsdetail[]=[];
// deleteedproduct: Addedcartitemsdetail[ ]= []
ngOnInit(): void {
 this.manager.getAllToBasket().subscribe((response=>{
this.addedItemsCartList = response
 }))
}
deletecartitems(id:number, price:number){
  const datas ={
 deletion:id,
  quantity: 1,
  price

  }
  
this.deletedservice.deleteItemsFromBasket(datas).subscribe((respo=>{
  console.log(respo)
}))

  
    
}
}

