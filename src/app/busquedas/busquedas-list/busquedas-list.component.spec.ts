import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedasListComponent } from './busquedas-list.component';

describe('BusquedasListComponent', () => {
  let component: BusquedasListComponent;
  let fixture: ComponentFixture<BusquedasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
