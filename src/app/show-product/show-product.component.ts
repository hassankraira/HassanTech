import { Products } from './../Products';
import { ProductsComponent } from './../products/products.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrl: './show-product.component.css'
})
export class ShowProductComponent {
  productCat=Products.categories
  AllProducts = Products.products;
  aa=ProductsComponent.productSelected
  categores=Products.categories
  ccc=this.categores.filter(c=>c.name!=this.aa.ProductCategories)
  ss=this.AllProducts.filter(p=>p.ProductCategories==this.aa.ProductCategories&&p.ProductName!=this.aa.ProductName)
selected(p:Products ){
this.aa=p
window.scroll(0,0)
this.ss=this.AllProducts.filter(p=>p.ProductCategories==this.aa.ProductCategories&&p.ProductName!=this.aa.ProductName)

}
up(){

  ProductsComponent.show=false
  console.log(ProductsComponent.show)

  window.scrollTo(0, 0);
}

}
