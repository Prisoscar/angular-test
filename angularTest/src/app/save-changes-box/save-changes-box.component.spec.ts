import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveChangesBoxComponent } from './save-changes-box.component';

describe('SaveChangesBoxComponent', () => {
  let component: SaveChangesBoxComponent;
  let fixture: ComponentFixture<SaveChangesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveChangesBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveChangesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
