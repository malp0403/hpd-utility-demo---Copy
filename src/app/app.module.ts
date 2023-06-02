import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeDemoComponent } from './components/home-demo/home-demo.component';
import { HpdUtilityModule } from 'hpd-utility';
import { TestDemoComponent } from './components/test-demo/test-demo.component';
import { AutocompleteDemoComponent } from './components/autocomplete-demo/autocomplete-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';
import { TextDemoComponent } from './components/text-demo/text-demo.component';
import { SelectDemoComponent } from './components/select-demo/select-demo.component';
import { MultiSelectDemoComponent } from './components/multi-select-demo/multi-select-demo.component';
import {MatStepperModule} from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDemoComponent,
    TestDemoComponent,
    AutocompleteDemoComponent,
    TableDemoComponent,
    TextDemoComponent,
    SelectDemoComponent,
    MultiSelectDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HpdUtilityModule,
    MatStepperModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
