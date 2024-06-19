import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickawayComponent } from './clickaway.component';

describe('ClickawayComponent', () => {
  let component: ClickawayComponent;
  let fixture: ComponentFixture<ClickawayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClickawayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClickawayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
