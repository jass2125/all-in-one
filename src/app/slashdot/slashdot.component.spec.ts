import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlashdotComponent } from './slashdot.component';

describe('SlashdotComponent', () => {
  let component: SlashdotComponent;
  let fixture: ComponentFixture<SlashdotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlashdotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlashdotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
