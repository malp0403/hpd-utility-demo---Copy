import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpdSelectComponent } from './hpd-select.component';

describe('HpdSelectComponent', () => {
  let component: HpdSelectComponent;
  let fixture: ComponentFixture<HpdSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HpdSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpdSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
