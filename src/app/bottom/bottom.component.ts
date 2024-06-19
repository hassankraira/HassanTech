import { HomeComponent } from './../home/home.component';
import { AppComponent } from './../app.component';
import { ProductsComponent } from './../products/products.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.css'
})
export class BottomComponent {
appComponents= AppComponent;
HomeComponent=HomeComponent
top(){
  ProductsComponent.show=true
  window.scrollTo(0,0)
}
tt(){
  ProductsComponent.show=false
  window.scrollTo(0,0)
}

}
