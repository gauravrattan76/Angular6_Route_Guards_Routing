import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(employeeForm :NgForm):void{
    console.log("Value of the form--"+ employeeForm.value);
    this.createEmployeeForm.reset({
    });
  }

  @ViewChild('employeeForm') public createEmployeeForm:NgForm;

}
