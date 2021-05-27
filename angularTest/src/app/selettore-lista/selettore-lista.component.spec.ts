import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelettoreListaComponent } from './selettore-lista.component';

describe('SelettoreListaComponent', () => {
  let component: SelettoreListaComponent;
  let fixture: ComponentFixture<SelettoreListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelettoreListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelettoreListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
