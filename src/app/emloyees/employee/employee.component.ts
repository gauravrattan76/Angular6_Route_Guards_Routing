import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {employeeService} from '../../employeeService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  providers:[employeeService],
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emp:any;
  id:string;
  errorMessage:any;
  constructor(private _activatedRoute:ActivatedRoute,private _employeeService:employeeService,private _router:Router) { }

  ngOnInit() {
     this.id = this._activatedRoute.snapshot.paramMap.get('id');
   return this._employeeService.getEmploye(this.id).subscribe(
     (data) => this.emp = data,
     (error) => this.errorMessage = error
   )


  }

  
  onClick():void{
     this._router.navigate(['/list']);
  }
    
}
