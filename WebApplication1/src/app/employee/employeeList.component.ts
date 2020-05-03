import { Component, OnInit } from '@angular/core';
import { Iemployee} from './employee';
import { EmployeeService } from './employee.service';
import { error } from 'util';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    providers: [EmployeeService]
})
export class employeeListCoponent implements OnInit{
    employees: Iemployee[];
    statusMessage: string;

    selectedEmployeeCountRadioButton: string = "all";    
    constructor(private _employeeService: EmployeeService) {        
            }

    ngOnInit() {
        this._employeeService.getEmployee().subscribe((employeeData) => this.employees = employeeData, (error) => this.statusMessage = 'problem with service');
    }

    getTotalEmployeeCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender ==="Male").length;
    }

    getTotalFemaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }

    onRadioButtonSelectionChanged(selectedRadionButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadionButtonValue;
    }
   
}