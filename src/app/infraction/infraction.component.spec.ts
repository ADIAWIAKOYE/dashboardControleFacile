import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfractionComponent } from './infraction.component';

describe('InfractionComponent', () => {
  let component: InfractionComponent;
  let fixture: ComponentFixture<InfractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
