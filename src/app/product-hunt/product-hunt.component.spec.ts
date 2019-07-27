import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHuntComponent } from './product-hunt.component';

describe('ProductHuntComponent', () => {
  let component: ProductHuntComponent;
  let fixture: ComponentFixture<ProductHuntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHuntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
