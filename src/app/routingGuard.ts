import {Injectable} from '@angular/core';
import {CreateEmployeeComponent} from './emloyees/create-employee/create-employee.component';
import {CanDeactivate} from '@angular/router';

@Injectable()
export class canDeactivateRoute implements CanDeactivate<CreateEmployeeComponent>{
    canDeactivate(component:CreateEmployeeComponent):boolean
    {
        if(component.createEmployeeForm.dirty)
        {
           confirm("Are you sure you want to redirect away from the page??"); 
        }
        return true;
    }

}