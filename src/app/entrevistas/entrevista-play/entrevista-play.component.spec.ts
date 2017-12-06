import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrevistaPlayComponent } from './entrevista-play.component';

describe('EntrevistaPlayComponent', () => {
  let component: EntrevistaPlayComponent;
  let fixture: ComponentFixture<EntrevistaPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrevistaPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrevistaPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
