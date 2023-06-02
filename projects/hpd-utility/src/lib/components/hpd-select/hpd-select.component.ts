import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject, debounceTime, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MOCK_ERROR_MESSAGES, MOCK_OPTIONS } from '../../mock/mock-data';
import { ErrorMessage } from '../../interfaces/index';




@Component({
  selector: 'lib-hpd-select',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './hpd-select.component.html',
  styleUrls: ['./hpd-select.component.scss']
})
export class HpdSelectComponent implements OnInit,OnDestroy{
  private readonly _destroyed$:Subject<void> = new Subject();

  @Input() control:FormControl = new FormControl(0,[Validators.required]);
  @Input() options:any[] = MOCK_OPTIONS;
  @Input() placeholder:string ="";
  @Input() errorMessages:ErrorMessage[]=MOCK_ERROR_MESSAGES;
  

  constructor(public cdRef:ChangeDetectorRef){
    this.control.valueChanges.pipe(takeUntil(this._destroyed$),debounceTime(500)).subscribe({
      next:(val)=>{
        console.log(val);
      }
    })

  }
  ngOnInit(): void {

    console.log(this.control);
  }



  getErrorMessage():string{

    if(!this.control || (this.control && !this.control.invalid )){
      return "";
    }

    //Take the first Error Message
    let errorMessage = "";
    this.errorMessages.forEach(element => {
      if(this.control.errors && this.control.errors[element.key]){
        errorMessage = element.message;
        return;
      }
    });
    return errorMessage
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
