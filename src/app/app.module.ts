import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HomeComponentComponent } from './components/home-component/home-component.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';
import { CartComponentComponent } from './components/cart-component/cart-component.component';


const routes: Routes = [
  {
    path: "",
    component:  HomeComponentComponent,
     

    
  },

  




  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    FooterComponentComponent,
     HeaderComponent,
    
     CartComponentComponent,
     
     
  
  ],
  imports: [
    [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes),
    CarouselModule.forRoot()
  ],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
