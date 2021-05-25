import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSpesaComponent } from './form-spesa.component';

describe('FormSpesaComponent', () => {
  let component: FormSpesaComponent;
  let fixture: ComponentFixture<FormSpesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSpesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSpesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
