import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpserveService {
  info1: any[] = ["101", "Piyush", "JFSD"];
  sendEmp1() {
    return this.info1;
  }
  info2: any[] = ["102", "Sakshi", "Angular Developer"];
  sendEmp2() {
    return this.info2;
  }
  info3: any[] = ["103", "Tarun", "Data Analyst"];
  sendEmp3() {
    return this.info3;
  }
  info4: any[] = ["104", "Tapesh", "Engineer"];
  sendEmp4() {
    return this.info4;
  }
  info5: any[] = ["105", "Billu", "Engineer"];
  sendEmp5() {
    return this.info5;
  }
  constructor() { }
}
