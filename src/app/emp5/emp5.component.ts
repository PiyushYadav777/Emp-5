import { Component } from '@angular/core';
import { EmpserveService } from '../empserve.service';

@Component({
  selector: 'app-emp5',
  templateUrl: './emp5.component.html',
  styleUrls: ['./emp5.component.css'],
  providers: [EmpserveService]
})
export class Emp5Component {
  employee5:any []=[];
  getEmp5(){
    this.employee5=this.es.sendEmp5();
  }
  constructor(private es:EmpserveService) {}

}
