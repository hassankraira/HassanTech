import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USBCablessComponent } from './usbcabless.component';

describe('USBCablessComponent', () => {
  let component: USBCablessComponent;
  let fixture: ComponentFixture<USBCablessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [USBCablessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(USBCablessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
