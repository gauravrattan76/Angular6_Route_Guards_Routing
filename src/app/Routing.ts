import {ModuleWithProviders, Component} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { ListEmployeeComponent } from './emloyees/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './emloyees/create-employee/create-employee.component';
import {EmployeeComponent} from './emloyees/employee/employee.component';
import {canDeactivateRoute} from './routingGuard';
import { AppComponent } from './app.component';
import {PreloadAllModules} from '@angular/router';
import {customPreloadService} from './customPreLoadService';

const route : Routes = [
    {path:'', redirectTo:'',pathMatch:'full'},
    {path:'', component:AppComponent},
    { path: 'list',data:{preload:true} ,loadChildren: 'src/app/emloyees/employeeModule#employeeModule' }
]

export const routing : ModuleWithProviders = RouterModule.forRoot(route,{preloadingStrategy:customPreloadService});