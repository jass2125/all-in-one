import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallStreetJournalComponent } from './wall-street-journal.component';

describe('NewsComponent', () => {
  let component: WallStreetJournalComponent;
  let fixture: ComponentFixture<WallStreetJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallStreetJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallStreetJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
