"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
//import { EmployeeComponent } from './employee/employee.component';
var employeeList_component_1 = require("./employee/employeeList.component");
var employeeTitle_pipe_1 = require("./employee/employeeTitle.pipe");
var employeeCount_component_1 = require("./employee/employeeCount.component");
var home_component_1 = require("./home/home.component");
var pageNotfound_Component_1 = require("./others/pageNotfound.Component");
var appRoute = [
    { path: 'home', component: home_component_1.homeComponent },
    { path: 'employees', component: employeeList_component_1.employeeListCoponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pageNotfound_Component_1.pageNotFoundComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoute)],
            declarations: [app_component_1.AppComponent, employeeList_component_1.employeeListCoponent, employeeTitle_pipe_1.employeeTitlePipe, employeeCount_component_1.employeeCountComponent, home_component_1.homeComponent,
                pageNotfound_Component_1.pageNotFoundComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map