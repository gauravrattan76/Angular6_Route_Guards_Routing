import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './emloyees/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './emloyees/create-employee/create-employee.component';
import {EmployeeComponent} from './emloyees/employee/employee.component';
import {routing} from './Routing';
import {canDeactivateRoute} from './routingGuard';



@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [canDeactivateRoute],
  bootstrap: [AppComponent]
})
export class AppModule { }
