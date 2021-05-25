import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaleSpesaComponent } from './totale-spesa.component';

describe('TotaleSpesaComponent', () => {
  let component: TotaleSpesaComponent;
  let fixture: ComponentFixture<TotaleSpesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotaleSpesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaleSpesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
