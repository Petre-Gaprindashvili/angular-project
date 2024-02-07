import { Component, OnInit, HostListener, } from '@angular/core';
import { CartAddingServiceService } from 'src/app/services/cart-adding-service.service';
import { cartdatadetails } from 'src/app/interfaces/cart-datadetails';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  constructor(private cartadding:CartAddingServiceService){}

 
  

  images: string[] = [
    'https://images.squarespace-cdn.com/content/v1/5e7bd4d9645ae354fdd81113/d51a67e8-0560-4554-87f8-d862e8d3ec37/M+104.jpg',
    "https://w.wallha.com/ws/12/zIADxn8k.jpg"    
  
  ];

  currentIndex: number = 0;


  cartItems:cartdatadetails[] =[]
  totalNumberOfCart = 0;
  ngOnInit() {

    this.cartadding.getAllToBasket().subscribe((response=>{
      this.cartItems =response
      this.totalNumberOfCart = response.length
    }))
    this.cartadding.addedNewCartitemsObservable.subscribe((data=>{
      this.totalNumberOfCart += data
    }))



  
    setInterval(() => {
      this.nextSlide();
    }, 4000); 
  }
  nextSlide() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }
  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if(window.scrollY >=70){
this.isSticky = true
    } else{
      this.isSticky =false
    }
      // this.isSticky = window.pageYOffset >= 100;
  }

  
   
  
}
  
  

