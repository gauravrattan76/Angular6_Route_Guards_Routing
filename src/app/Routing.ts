import {ModuleWithProviders, Component} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { ListEmployeeComponent } from './emloyees/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './emloyees/create-employee/create-employee.component';
import {EmployeeComponent} from './emloyees/employee/employee.component';
import {canDeactivateRoute} from './routingGuard';

const route : Routes = [
    {path:'', redirectTo:'list',pathMatch:'full'},
    {path:'create', component: CreateEmployeeComponent,canDeactivate:[canDeactivateRoute] },
    {path:'list', component: ListEmployeeComponent},
    {path:'list/:id', component: EmployeeComponent}
]

export const routing : ModuleWithProviders = RouterModule.forRoot(route);