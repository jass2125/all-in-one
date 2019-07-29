import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeHackerComponent } from './life-hacker.component';

describe('LifeHackerComponent', () => {
  let component: LifeHackerComponent;
  let fixture: ComponentFixture<LifeHackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeHackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeHackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
