import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusvehiculeComponent } from './plusvehicule.component';

describe('PlusvehiculeComponent', () => {
  let component: PlusvehiculeComponent;
  let fixture: ComponentFixture<PlusvehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlusvehiculeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlusvehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
