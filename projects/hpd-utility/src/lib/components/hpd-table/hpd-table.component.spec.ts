import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpdTableComponent } from './hpd-table.component';

describe('HpdTableComponent', () => {
  let component: HpdTableComponent;
  let fixture: ComponentFixture<HpdTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HpdTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
