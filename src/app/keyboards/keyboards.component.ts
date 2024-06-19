import { ProductsComponent } from './../products/products.component';
import { Products } from './../Products';
import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboards',
  templateUrl: './keyboards.component.html',
  styleUrl: './keyboards.component.css'
})
export class KeyboardsComponent {
  AllProducts = Products.products;
  aa=this.AllProducts.filter(p=>p.ProductCategories=="Keyboards")
  keyboardsComponent=KeyboardsComponent
  showProduct(){
    return false
  }
  upup(){
    ProductsComponent.show=false
  }
  setProdctName(PoductName:string,product:Products){
    ProductsComponent.ProductName=PoductName
    ProductsComponent.productSelected=product

    window.scrollTo(0,0)
    console.log(PoductName)
  }
}
