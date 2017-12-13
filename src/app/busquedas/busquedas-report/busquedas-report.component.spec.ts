import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedasReportComponent } from './busquedas-report.component';

describe('BusquedasReportComponent', () => {
  let component: BusquedasReportComponent;
  let fixture: ComponentFixture<BusquedasReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedasReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedasReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
