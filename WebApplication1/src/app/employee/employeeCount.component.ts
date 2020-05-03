import { Component,Input,Output,EventEmitter } from "@angular/core";

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/employeeCount.component.html',
    styleUrls: ['app/employee/employeeCount.component.css']
    })
export class employeeCountComponent {
    @Input()
    all: number;
    @Input()
    male : number;
    @Input()
    female: number;

    selectedRadioButtonValue: string = "all";

    @Output()
    CountRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    onRadioButtonSelectionChanged()
    {
        this.CountRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue)  
    }

     
}