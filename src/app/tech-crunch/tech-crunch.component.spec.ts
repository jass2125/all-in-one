import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCrunchComponent } from './tech-crunch.component';

describe('TechCrunchComponent', () => {
  let component: TechCrunchComponent;
  let fixture: ComponentFixture<TechCrunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechCrunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechCrunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
