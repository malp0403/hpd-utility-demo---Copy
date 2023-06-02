import { Component } from '@angular/core';
import { ErrorMessage } from 'hpd-utility';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-select-demo',
  templateUrl: './select-demo.component.html',
  styleUrls: ['./select-demo.component.scss']
})
export class SelectDemoComponent {
  htmlCode:string=`<lib-hpd-select 
  [control]="control" 
  [placeholder]="placeholder"
  [options]="options">
  </lib-hpd-select>`;

  errorMessages:ErrorMessage= {
    key:"errorKey",
    message:"it is a message"
  };
  errorMessagesPropertyNames:string[] = []
  errorMessagesPropertyTypes:any[]=[];
  errorMessagesExamples:any[]=[];
  constructor(private utilitySrv:UtilityService){


    this.errorMessagesPropertyNames = this.utilitySrv.getPropertiesNames(this.errorMessages);
    this.errorMessagesPropertyTypes = this.utilitySrv.getPropertiesTypes(this.errorMessages);
    this.errorMessagesExamples = this.utilitySrv.getPropertiesValues(this.errorMessages);
  }
}
