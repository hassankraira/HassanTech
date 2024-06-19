import { ProductsComponent } from './../products/products.component';
import { Products } from './../Products';
import { Component } from '@angular/core';

@Component({
  selector: 'app-monitors',
  templateUrl: './monitors.component.html',
  styleUrl: './monitors.component.css'
})
export class MonitorsComponent {
  AllProducts = Products.products;
  aa=this.AllProducts.filter(p=>p.ProductCategories=="Monitors")
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
