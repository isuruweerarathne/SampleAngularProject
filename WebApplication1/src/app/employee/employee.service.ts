﻿import { Injectable } from "@angular/core";
import { Iemployee } from "./employee";
import { Http, Response } from "@angular/http"
import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'



@Injectable()
export class EmployeeService {  

    constructor(private _http: Http) {

    }

    getEmployee(): Observable<Iemployee[]>{
        return this._http.get("https://localhost:44394/api/employees")
            .map((response: Response) => <Iemployee[]>response.json())
            .catch(this.habdleError);
    }
     
    habdleError(error : Response ) {
        console.error(error);

        return Observable.throw(error);
    }
}