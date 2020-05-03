import {Component} from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html'    
})
export class EmployeeComponent
{
    columnSpan: 2;
    firstName: string = ' Tomm';
    lastname: string = 'wee';
    gender: string = 'male'
    age: number = 28;
    showDetails = false;

    toggleDetails()
    {
        this.showDetails = !this.showDetails;
    }
}