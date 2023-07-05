import { Component } from '@angular/core';
import { EmpserveService } from '../empserve.service';

@Component({
  selector: 'app-emp2',
  templateUrl: './emp2.component.html',
  styleUrls: ['./emp2.component.css'],
  providers: [EmpserveService]
})
export class Emp2Component {
  employee2:any []=[];
  getEmp2(){
    this.employee2=this.es.sendEmp2();
  }
  constructor(private es:EmpserveService) {}

}
