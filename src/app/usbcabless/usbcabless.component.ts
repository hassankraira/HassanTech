import { ProductsComponent } from './../products/products.component';
import { Products } from './../Products';
import { Component } from '@angular/core';

@Component({
  selector: 'app-usbcabless',
  templateUrl: './usbcabless.component.html',
  styleUrl: './usbcabless.component.css'
})
export class USBCablessComponent {
  AllProducts = Products.products;

  aa=this.AllProducts.filter(p=>p.ProductCategories=="USB Cables")
  showProduct(){
    return false
  }
  setProdctName(PoductName:string,product:Products){
    ProductsComponent.ProductName=PoductName
    ProductsComponent.productSelected=product
window.scroll(0,0)
    console.log(PoductName)
  }
}
