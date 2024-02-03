import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  images: string[] = [
    ' https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg',
    'https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg',
    
    // Add more image paths as needed
  ];

  currentIndex: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Change image every 5 seconds, adjust as needed
  }
  nextSlide() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }
  }

