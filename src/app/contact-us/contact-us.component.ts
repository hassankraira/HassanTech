import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
info=[
  {img:'assets/location1.png',information1:'Hai El-Manshia El-Gedid',information2:'Mahmudiya, BH 22718',information3:'Egypt'},
  {img:'assets/phone1.png',information1:'+20 111 111 1111',information2:'+20 120 349 1222',information3:''},
  {img:'assets/message.png',information1:'info@hassantech.com',information2:'sales@hassantech.com'}



]
}
