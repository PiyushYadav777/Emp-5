import { Component } from '@angular/core';
import { EmpserveService } from '../empserve.service';

@Component({
  selector: 'app-emp3',
  templateUrl: './emp3.component.html',
  styleUrls: ['./emp3.component.css'],
  providers: [EmpserveService]
})
export class Emp3Component {
  employee3:any []=[];
  getEmp3(){
    this.employee3=this.es.sendEmp3();
  }
  constructor(private es:EmpserveService) {}

}
