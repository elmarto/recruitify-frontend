import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedasDetailComponent } from './busquedas-detail.component';

describe('BusquedasDetailComponent', () => {
  let component: BusquedasDetailComponent;
  let fixture: ComponentFixture<BusquedasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
