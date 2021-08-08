import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';

import { MessageType, MessageService } from './message.service';
import { Department, Employee } from './models';

export interface Filter {
    month: boolean;
    week: boolean;
    departments: Department[];
}

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private departmentsUrl = 'http://localhost:8081/departments/';
    private employeesUrl = 'http://localhost:8081/employees/';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    getDepartments(): Observable<Department[]> {
        return this.http.get<Department[]>(this.departmentsUrl).pipe(
            catchError(this.handleError<Department[]>('getDepartments', []))
        );
        //TODO: Catch errors
    }

    count = 0;

    getEmployees(filter?: Filter): Observable<Employee[]> {
        console.log("get emp");
        let params = new HttpParams();
        if (filter) {
            let deps = filter.departments.map(({ id }) => id);
            for (let d of deps) {
                params = params.append('departments', d);
            }
            if (filter.month) {
                params = params.set('month', true);
            }
            if (filter.week) {
                params = params.set('week', true);
            }
        }
        const options = {
            params: params
        };
        return this.http.get<Employee[]>(this.employeesUrl, options).pipe(
            catchError(this.handleError<Employee[]>('getEmployees', []))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            this.messageService.add({
                type: MessageType.Error,
                text: "Der er sket en teknisk fejl - prøv igen senere.",
                icon: 'plug'
            });
            return of(result as T);
        };
    }

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }
}
