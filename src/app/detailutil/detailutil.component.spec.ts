import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailutilComponent } from './detailutil.component';

describe('DetailutilComponent', () => {
  let component: DetailutilComponent;
  let fixture: ComponentFixture<DetailutilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailutilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
