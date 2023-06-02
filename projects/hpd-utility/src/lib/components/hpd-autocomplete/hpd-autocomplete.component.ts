import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Subject} from 'rxjs';
import { MOCK_ADDRESSES } from '../../mock/mock-data';

export interface HpdAutoCompleteOptions {
  id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'lib-hpd-autocomplete',
  standalone: true,
  imports: [MatAutocompleteModule, ReactiveFormsModule, MatFormFieldModule, BrowserAnimationsModule],
  templateUrl: './hpd-autocomplete.component.html',
  styleUrls: ['./hpd-autocomplete.component.scss']
})
export class HpdAutocompleteComponent implements OnInit, OnDestroy {
  private readonly _destroyed$: Subject<void> = new Subject();

  @Input() control: FormControl = new FormControl(null);
  @Input() placeholder: string = "Search...";
  @Input() options: HpdAutoCompleteOptions[] = MOCK_ADDRESSES;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}



