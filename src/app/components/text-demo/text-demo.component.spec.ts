import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDemoComponent } from './text-demo.component';

describe('TextDemoComponent', () => {
  let component: TextDemoComponent;
  let fixture: ComponentFixture<TextDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
