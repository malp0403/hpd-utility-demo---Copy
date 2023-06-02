import { Component } from '@angular/core';

@Component({
  selector: 'app-autocomplete-demo',
  templateUrl: './autocomplete-demo.component.html',
  styleUrls: ['./autocomplete-demo.component.scss']
})
export class AutocompleteDemoComponent {
  htmlCode:string=`<lib-hpd-autocomplete 
  [control]="control" 
  [placeholder]="placeholder"
  [options]="options">
  </lib-hpd-autocomplete>`;
}
