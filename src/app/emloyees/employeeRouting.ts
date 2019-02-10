import {ModuleWithProviders, Component} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {canDeactivateRoute} from '../routingGuard';


import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import {EmployeeComponent} from './employee/employee.component';

const route: Routes =[
    {path:'create',component: CreateEmployeeComponent,canDeactivate:[canDeactivateRoute]},
    {path:'list',component: ListEmployeeComponent},
    {path:'list/:id', component: EmployeeComponent}
]

export const routing :ModuleWithProviders = RouterModule.forChild(route);