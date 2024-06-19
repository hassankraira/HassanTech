import { ProductsComponent } from './../products/products.component';
import { Products } from './../Products';
import { Component } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.css'
})
export class SpeakersComponent {
  AllProducts = Products.products;
  aa=this.AllProducts.filter(p=>p.ProductCategories=="Speakers")
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
