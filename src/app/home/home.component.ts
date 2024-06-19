import { ProductsComponent } from './../products/products.component';
import { Products } from './../Products';
import { AppComponent } from './../app.component';
import { Component, HostListener, output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    appComponents=AppComponent
    HomeComponent=HomeComponent
    
    AllProducts=Products.products
    categores=Products.categories
    
    ngOnInit() {
      this.checkScroll();
    }
  
    @HostListener('window:scroll', [])
    onWindowScroll() {
      this.checkScroll();

    }
    up(){
      ProductsComponent.show=false
      console.log(ProductsComponent.show)

      window.scrollTo(0, 0);
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







static selected(name:string){
  AppComponent.an2.classList.remove('selected')
  AppComponent.an.classList.remove('selected')
  AppComponent.an3.classList.remove('selected')
  AppComponent.an4.classList.remove('selected')
console.log(name)
  if(name=='H'){
    AppComponent.an2.classList.add('selected')
    AppComponent.an.classList.remove("selected")
AppComponent.an3.classList.remove('selected')
AppComponent.an4.classList.remove('selected')
  }
  else if(name=='F'){
    AppComponent.an4.classList.add('selected')

    AppComponent.an2.classList.remove('selected')
    AppComponent.an.classList.remove("selected")
AppComponent.an3.classList.remove('selected')
  }
 else if(name=='P'){
AppComponent.an.classList.add("selected")
AppComponent.an2.classList.remove('selected')
AppComponent.an3.classList.remove('selected')
AppComponent.an4.classList.remove('selected')

  }
 else if(name=='C'){
    AppComponent.an3.classList.add("selected")
    AppComponent.an2.classList.remove('selected')
    AppComponent.an.classList.remove('selected')
    AppComponent.an4.classList.remove('selected')

  }else{

  }
}
ssss(){
  ProductsComponent.show=true
}

}
