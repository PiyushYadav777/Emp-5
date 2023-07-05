import { Component } from '@angular/core';
import { EmpserveService } from '../empserve.service';

@Component({
  selector: 'app-emp1',
  templateUrl: './emp1.component.html',
  styleUrls: ['./emp1.component.css'],
  providers: [EmpserveService]
})
export class Emp1Component {
  employee1:any []=[];
  getEmp1(){
    this.employee1=this.es.sendEmp1();
  }
  constructor(private es:EmpserveService) {}

}
