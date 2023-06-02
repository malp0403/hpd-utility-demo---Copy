import { NgModule } from '@angular/core';
import { HpdUtilityComponent } from './hpd-utility.component';
import { HpdAutocompleteComponent } from './components/hpd-autocomplete/hpd-autocomplete.component';
import { HpdSelectComponent } from './components/hpd-select/hpd-select.component';
import { HpdTableComponent } from './components/hpd-table/hpd-table.component';
import { HpdTextComponent } from './components/hpd-text/hpd-text.component';



@NgModule({
  declarations: [
    HpdUtilityComponent
  ],
  imports: [
    HpdAutocompleteComponent,
    HpdSelectComponent,
    HpdTableComponent,
    HpdTextComponent

  ],
  exports: [
    HpdUtilityComponent,
    HpdAutocompleteComponent,
    HpdSelectComponent,
    HpdTableComponent,
    HpdTextComponent
  ]
})
export class HpdUtilityModule { }
