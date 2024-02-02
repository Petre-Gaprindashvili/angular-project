import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit  {

  images: string[] = [
    "https://img.choice.com.au/-/media/73009915653e46e8a6332743c6eea3a0.ashx?w=660&jq=80%20660w",
    "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg"
  ];

  currentIndex: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); 
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }
}







 

 