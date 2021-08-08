import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap, startWith, catchError } from 'rxjs/operators';

import { Department, Employee } from '../models';
import { ApiService, Filter } from '../api.service';

@Component({
    selector: 'app-foes-list',
    templateUrl: './foes-list.component.html',
    styleUrls: ['./foes-list.component.css']
})
export class FoesListComponent implements OnInit {
    // Fetched data
    departments: Department[] = [];
    employees: Employee[] = [];
    employees$!: Observable<Employee[]>;

    // Filters
    filterThisWeek = true;
    filterThisMonth = false;
    filterDepartments: Department[] = [];
    private filters = new Subject<Filter>();

    loading = false;

    constructor(
        private apiService: ApiService
    ) { }

    ngOnInit(): void {
        this.getDepartments();

        this.employees$ = this.filters.pipe(
            startWith(this.buildFilter()),
            debounceTime(100),
            distinctUntilChanged(),
            tap(() => this.loading = true),
            switchMap((filter: Filter) => this.apiService.getEmployees(filter)),
            tap(() => this.loading = false)
        );

        // Redirect recieved results from the Observable to a normal list
        // Could be done with the async filter, however we dont want to have multiple
        // asyncs in the template
        this.employees$.subscribe(res => {
            this.employees = res;
        });

    }
    
    getDepartments(): void {
        this.apiService.getDepartments()
            .subscribe(list => this.departments = list);
    }

    filterChanged(): void {
        this.filters.next(this.buildFilter());
    }

    buildFilter(): Filter {
        return {
            'week': this.filterThisWeek,
            'month': this.filterThisMonth,
            'departments': this.filterDepartments,
        }
    }
}
