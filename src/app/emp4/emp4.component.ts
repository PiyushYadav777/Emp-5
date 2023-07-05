import { Component } from '@angular/core';
import { EmpserveService } from '../empserve.service';

@Component({
  selector: 'app-emp4',
  templateUrl: './emp4.component.html',
  styleUrls: ['./emp4.component.css'],
  providers: [EmpserveService]
})
export class Emp4Component {
  employee4:any []=[];
  getEmp4(){
    this.employee4=this.es.sendEmp4();
  }
  constructor(private es:EmpserveService) {}

}
