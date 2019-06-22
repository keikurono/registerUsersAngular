import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraprogresoComponent } from './barraprogreso.component';

describe('BarraprogresoComponent', () => {
  let component: BarraprogresoComponent;
  let fixture: ComponentFixture<BarraprogresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraprogresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraprogresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
