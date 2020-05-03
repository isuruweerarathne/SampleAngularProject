import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes, Route } from '@angular/router'
    
import { AppComponent } from './app.component';
//import { EmployeeComponent } from './employee/employee.component';
import { employeeListCoponent } from './employee/employeeList.component';
import { employeeTitlePipe } from './employee/employeeTitle.pipe';
import { employeeCountComponent } from './employee/employeeCount.component';
import { homeComponent } from './home/home.component';
import { pageNotFoundComponent } from './others/pageNotfound.Component';

const appRoute: Routes = [
    { path: 'home', component: homeComponent },
    { path: 'employees', component: employeeListCoponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pageNotFoundComponent },
]

@NgModule({ 
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoute) ],
    declarations: [AppComponent, employeeListCoponent, employeeTitlePipe, employeeCountComponent, homeComponent
    ,pageNotFoundComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
