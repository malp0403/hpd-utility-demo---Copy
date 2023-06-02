import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MOCK_ERROR_MESSAGES } from '../../mock/mock-data';
import { ErrorMessage } from '../../interfaces/index';
import { Subject, distinctUntilChanged, tap } from 'rxjs';


@Component({
  selector: 'lib-hpd-text',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './hpd-text.component.html',
  styleUrls: ['./hpd-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

  
})
export class HpdTextComponent implements OnInit, OnDestroy{
  private readonly _destroyed$: Subject<void> = new Subject();

  constructor(){}


  @Input() control:FormControl = new FormControl('',[Validators.required]);
  @Input() placeholder:string ="Input...";
  @Input() label:string="label:"
  @Input() errorMessages:ErrorMessage[]= MOCK_ERROR_MESSAGES;

  errorMsg:string="";


  ngOnInit(): void {

  }

  getErrorMessage():string{
    console.log("calling getErrorMessage")
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
    return errorMessage;
  }


  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
