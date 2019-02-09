import { Component, OnInit } from '@angular/core';
import {Employee} from '../../employeeModel';
import {employeeService} from '../../employeeService';
import {filterPipe} from '../../filterPipe';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  providers:[employeeService],
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees:any[];
  errorMessage:any;
  constructor(private _employeeService:employeeService) { }

  ngOnInit() {
     return this._employeeService.getEmployes().subscribe(
      (data) => this.employees = data,
      (error) => this.errorMessage = error
    )
  }

}
