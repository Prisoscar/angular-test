import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSpesaWrapperComponent } from './lista-spesa-wrapper.component';

describe('ListaSpesaWrapperComponent', () => {
  let component: ListaSpesaWrapperComponent;
  let fixture: ComponentFixture<ListaSpesaWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSpesaWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSpesaWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
