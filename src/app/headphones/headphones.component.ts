import { ProductsComponent } from './../products/products.component';
import { Component } from '@angular/core';
import { Products } from '../Products';

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrl: './headphones.component.css'
})
export class HeadphonesComponent {

  AllProducts = Products.products;
  aa=this.AllProducts.filter(p=>p.ProductCategories=="Headphones")
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
