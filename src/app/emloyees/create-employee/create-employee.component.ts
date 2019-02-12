import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { employeeService } from '../../employeeService';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  providers: [employeeService],
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: any;
  emp :any;
  constructor(private _employeeService: employeeService) { }

  ngOnInit() {
  }

  submitForm(employeeForm: NgForm): void {
    console.log("Value of the form--" + employeeForm.value);
    // this._employeeService.postEmploye().subscribe(
    //   data => this.employee = data
    //   )
    this.createEmployeeForm.reset({
    });
  }

  id = 4;


  deleteEmp(){
    return this._employeeService.deleteEmploye(this.id).subscribe(
      data => this.emp = data
    )
  }

  @ViewChild('employeeForm') public createEmployeeForm: NgForm;

}
