import { HomeComponent } from './../home/home.component';
import { ProductsComponent } from './../products/products.component';
import { Products } from './../Products';
import { Component } from '@angular/core';

@Component({
  selector: 'app-webcams',
  templateUrl: './webcams.component.html',
  styleUrl: './webcams.component.css'
})

export class WebcamsComponent {
  OnInit(){
  HomeComponent.selected('P')
  }
  AllProducts = Products.products;
  aa=this.AllProducts.filter(p=>p.ProductCategories=="Webcams")
  showProduct(){
    return false
  }
  setProdctName(PoductName:string,product:Products){
    ProductsComponent.ProductName=PoductName
    ProductsComponent.productSelected=product

    window.scrollTo(0,0)
    console.log(PoductName)
  }
}
