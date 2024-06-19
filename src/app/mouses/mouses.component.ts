import { Router } from '@angular/router';
import { ProductsComponent } from './../products/products.component';
import { Products } from './../Products';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mouses',
  templateUrl: './mouses.component.html',
  styleUrl: './mouses.component.css'
})
export class MousesComponent {
  constructor(public router: Router) { }

  AllProducts = Products.products;
  aa=this.AllProducts.filter(p=>p.ProductCategories=="Mice")
  setProdctName(PoductName:string,product:Products){
    ProductsComponent.ProductName=PoductName
    ProductsComponent.productSelected=product
    window.scrollTo(0,0)

    console.log(PoductName)
  }
}
