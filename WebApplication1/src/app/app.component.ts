import { Component } from "@angular/core"

@Component({
    selector: 'my-app',
    template: `<div style="padding:5px">
                    <ul>
                        <li><a routerLink="home">Home</a></li>
                         //<li><a routerLink="employees">Employees</a></li>
                    </ul>
                    <router-outlet></router-outlet>
                </div>`
    
                
})
export class AppComponent {

    name = 'isuru';  
}   