import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  getPropertiesNames(obj:object):string[]{
    return Object.keys(obj);
  }

  getPropertiesTypes(obj:any):string[]{
    let propertiesTypes :string[]=[];

    let k : keyof typeof obj;
    for(k in obj){
      propertiesTypes.push(typeof obj[k]);
    }
    return propertiesTypes
  }
  getPropertiesValues(obj:any):string[]{
    let propertiesValues :any[]=[];
    Object.keys(obj).forEach(ele=>{
      propertiesValues.push(obj[ele]);
    })
    return propertiesValues;
  }
}
