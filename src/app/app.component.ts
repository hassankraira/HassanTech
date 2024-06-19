import { ProductsComponent } from './products/products.component';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HassanTech';
 static showProductsCat=false;
  search(){
    return false
  }
  appComponents=AppComponent
  @ViewChild('P') P!: ElementRef<HTMLElement>;
  @ViewChild('H') H!: ElementRef<HTMLElement>;
  @ViewChild('C') C!: ElementRef<HTMLElement>;
  @ViewChild('F') F!: ElementRef<HTMLElement>;

  menuActive = false;

  static an: HTMLElement;
  static an2: HTMLElement;
static an3 :HTMLElement;
static an4 :HTMLElement;
ngAfterViewInit(): void {
    AppComponent.an = this.P.nativeElement;
    AppComponent.an2 = this.H.nativeElement;
    AppComponent.an3=this.C.nativeElement;
    AppComponent.an4=this.F.nativeElement
    console.log(AppComponent.showProductsCat)
  }
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
 static showP(){
    ProductsComponent.show=false
    window.scrollTo(0, 0);
  
  }
   slected(authorElements:HTMLAnchorElement[],show:boolean,element1 ?: HTMLAnchorElement,){
    AppComponent.an=authorElements[0]
    AppComponent.an2!=element1
    AppComponent.an3=authorElements[2]
    AppComponent.showProductsCat=show
    this.appComponents.showProductsCat=show
    console.log(this.appComponents)
    element1!.classList.add('selected')
   for(let i =0 ; i<authorElements.length;i++){
    authorElements[i].classList.remove('selected')
   }
 }
 top(){
  window.scroll(0 , 0)

 }
 
}
