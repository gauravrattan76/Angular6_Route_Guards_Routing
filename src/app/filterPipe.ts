import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'filterPipe'
})

export class filterPipe implements PipeTransform{
    transform(employees:any[],searchText:any)
    {
        if(!employees || !searchText)
        {
            return employees;
        }
      return employees.filter(emp => emp.name.toLowerCase().indexOf(searchText.toLowerCase())!== -1);
    }
}

