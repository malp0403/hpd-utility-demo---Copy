import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpdTextComponent } from './hpd-text.component';

describe('HpdTextComponent', () => {
  let component: HpdTextComponent;
  let fixture: ComponentFixture<HpdTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HpdTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpdTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
