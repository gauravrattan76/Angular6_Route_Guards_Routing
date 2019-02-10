import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {filterPipe} from '../filterPipe';


import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import {EmployeeComponent} from './employee/employee.component';
import {routing} from './employeeRouting';

@NgModule({
    declarations: [
        ListEmployeeComponent,
        CreateEmployeeComponent,
        EmployeeComponent,
        filterPipe
    ],
    imports: [
      BrowserModule,
      routing,
      FormsModule
    ],
  })
  export class employeeModule { }
  