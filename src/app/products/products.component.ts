import { HomeComponent } from './../home/home.component';
import { Router } from '@angular/router';
import { Products } from './../Products';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  static ProductsComponent: Products;
  constructor(public router: Router) { }
 static productSelected:Products
  AllProducts = Products.products;
  productsComponent=ProductsComponent
  HomeComponent=HomeComponent
   static show :boolean=true
   static ProductName=''
   
   showflase(){
    ProductsComponent.show=false
    
    window.scrollTo(0, 0);
   }
  productCat=Products.categories
  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }
  

  checkScroll() {
    const gridItems = document.querySelectorAll('.grid-item');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    gridItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top + scrollTop;
      const itemHeight = item.clientHeight;

      if (scrollTop > itemTop - windowHeight * 0.8 && scrollTop < itemTop + itemHeight * 0.8) {
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
      }
    });
  }

}
