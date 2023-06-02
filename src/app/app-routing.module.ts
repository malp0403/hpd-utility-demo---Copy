import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeDemoComponent } from './components/home-demo/home-demo.component';
import { TestDemoComponent } from './components/test-demo/test-demo.component';
import { AutocompleteDemoComponent } from './components/autocomplete-demo/autocomplete-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';
import { TextDemoComponent } from './components/text-demo/text-demo.component';
import { SelectDemoComponent } from './components/select-demo/select-demo.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'home-demo',
  component: HomeDemoComponent
},
{
  path: 'test-demo',
  component: TestDemoComponent
}, {
  path: 'auto-complete-demo',
  component: AutocompleteDemoComponent
},
{
  path: 'table-demo',
  component: TableDemoComponent
},
{
  path: 'text-demo',
  component: TextDemoComponent
},
{
  path: 'select-demo',
  component: SelectDemoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
