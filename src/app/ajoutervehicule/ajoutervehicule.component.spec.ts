import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutervehiculeComponent } from './ajoutervehicule.component';

describe('AjoutervehiculeComponent', () => {
  let component: AjoutervehiculeComponent;
  let fixture: ComponentFixture<AjoutervehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutervehiculeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutervehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
