import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FAQsComponent } from './faqs/faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SidemnueComponent } from './sidemnue/sidemnue.component';
import { BottomComponent } from './bottom/bottom.component';
import { KeyboardsComponent } from './keyboards/keyboards.component';
import { MousesComponent } from './mouses/mouses.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { USBCablessComponent } from './usbcabless/usbcabless.component';
import { MonitorsComponent } from './monitors/monitors.component';
import { WebcamsComponent } from './webcams/webcams.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { ClickawayComponent } from './clickaway/clickaway.component';
import { ShowProductComponent } from './show-product/show-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent, title: 'Home' },
  { 
    path: 'Products', component: ProductsComponent, title: "Products", 
    children: [
      { path: '', redirectTo: 'Products', pathMatch: 'full' },
      { path: 'Keyboards', component: KeyboardsComponent },
      { path: 'Keyboards/:productName', component: ShowProductComponent },

      { path: 'Mice', component: MousesComponent },
      { path: 'Mice/:productName', component: ShowProductComponent },

      { path: 'Headphones', component: HeadphonesComponent },
      { path: 'Headphones/:productName', component: ShowProductComponent },

      { path: 'USB Cables', component: USBCablessComponent },
      { path: 'USB Cables/:productName', component: ShowProductComponent }, 

      { path: 'Monitors', component: MonitorsComponent },
      { path: 'Monitors/:productName', component: ShowProductComponent }, 

      { path: 'Webcams', component: WebcamsComponent },
      { path: 'Webcams/:productName', component: ShowProductComponent },

      { path: 'Speakers', component: SpeakersComponent },
      { path: 'Speakers/:productName', component: ShowProductComponent }, 

    ]
  },
  { path: 'FAQs', component: FAQsComponent, title: 'FAQs' },
  { path: 'ContactUs', component: ContactUsComponent, title: 'ContactUs' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    FAQsComponent,
    ContactUsComponent,
    SidemnueComponent,
    BottomComponent,
    KeyboardsComponent,
    MousesComponent,
    HeadphonesComponent,
    USBCablessComponent,
    MonitorsComponent,
    WebcamsComponent,
    SpeakersComponent,
    ClickawayComponent,
    ShowProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
