import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorMessage } from 'hpd-utility';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-text-demo',
  templateUrl: './text-demo.component.html',
  styleUrls: ['./text-demo.component.scss']
})
export class TextDemoComponent {
  htmlCode:string=`<lib-hpd-text 
  [control]="control" 
  [placeholder]="placeholder"
  [options]="options">
  </lib-hpd-text>`;

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
