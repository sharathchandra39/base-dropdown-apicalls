import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveDropdownsComponent } from './responsive-dropdowns.component';

describe('ResponsiveDropdownsComponent', () => {
  let component: ResponsiveDropdownsComponent;
  let fixture: ComponentFixture<ResponsiveDropdownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveDropdownsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
