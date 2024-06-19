import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemnueComponent } from './sidemnue.component';

describe('SidemnueComponent', () => {
  let component: SidemnueComponent;
  let fixture: ComponentFixture<SidemnueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidemnueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidemnueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
