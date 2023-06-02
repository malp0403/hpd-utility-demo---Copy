import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpdAutocompleteComponent } from './hpd-autocomplete.component';

describe('HpdAutocompleteComponent', () => {
  let component: HpdAutocompleteComponent;
  let fixture: ComponentFixture<HpdAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HpdAutocompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpdAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
