import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDemoComponent } from './select-demo.component';

describe('SelectDemoComponent', () => {
  let component: SelectDemoComponent;
  let fixture: ComponentFixture<SelectDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
