import { Component, OnInit, HostListener, } from '@angular/core';
import { CartAddingServiceService } from 'src/app/services/cart-adding-service.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  constructor(private cartadding:CartAddingServiceService){}

 
  

  images: string[] = [
    'https://www.thaismileps.com/wp-content/plugins/autothumb/image.php?src=/wp-content/uploads/2022/01/banner.jpg&w=1920&h=920&zc=1&hash=922f4d1d8b9609aba59026f3b2abc3d0',
  ];

  currentIndex: number = 0;



  ngOnInit() {
 
    



  
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
      this.isSticky = window.pageYOffset >= 100;
  }

  
   
  
}
  
  

