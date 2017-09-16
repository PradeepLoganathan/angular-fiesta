import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkscardComponent } from './markscard.component';

describe('MarkscardComponent', () => {
  let component: MarkscardComponent;
  let fixture: ComponentFixture<MarkscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkscardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
