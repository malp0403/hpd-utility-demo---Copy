import { TypeofExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { HpdTableConfig } from 'hpd-utility';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.scss']
})
export class TableDemoComponent {


  htmlCode:string=`<lib-hpd-table 
  [hpdTableConfig]="hpdTableConfig"
  [dataSource]="dataSource">
  </lib-hpd-table>`;

  hpdTableConfig:HpdTableConfig = new HpdTableConfig();
  hpdTableConfigPropertyNames:string[] = []
  hpdTableConfigPropertyTypes:any[]=[];
  hpdTableConfigExamples:any[]=[];
  constructor(private utilitySrv:UtilityService){
    this.hpdTableConfig.columnDisplayNames=['Name1','Name2']
    this.hpdTableConfig.columnPropertyNames=['Property1','Property1']

    this.hpdTableConfigPropertyNames = this.utilitySrv.getPropertiesNames(new HpdTableConfig());
    this.hpdTableConfigPropertyTypes = this.utilitySrv.getPropertiesTypes(new HpdTableConfig());
    this.hpdTableConfigExamples = this.utilitySrv.getPropertiesValues(this.hpdTableConfig);
  }

}
