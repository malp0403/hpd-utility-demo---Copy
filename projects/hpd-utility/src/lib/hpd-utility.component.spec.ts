import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpdUtilityComponent } from './hpd-utility.component';

describe('HpdUtilityComponent', () => {
  let component: HpdUtilityComponent;
  let fixture: ComponentFixture<HpdUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpdUtilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpdUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
