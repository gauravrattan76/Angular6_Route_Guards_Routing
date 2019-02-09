import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class employeeService{

    constructor(private _http :HttpClient){

    }

    getEmployes():Observable<any[]>{
        return this._http.get<any[]>("http://localhost:3000/employees")
        .pipe(catchError(this.handleError))
    }

    getEmploye(id:string):Observable<any[]>{
        return this._http.get<any[]>("http://localhost:3000/employees/"+ id)
        .pipe(catchError(this.handleError))
    }

    handleError(errorResponse:HttpErrorResponse)
    {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        } else {
            console.error('Server Side Error :', errorResponse);
        }
        return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
    }
    

}