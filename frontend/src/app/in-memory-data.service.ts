import { Injectable } from '@angular/core';

import { Department, Employee } from './models';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService {
    createDb() {
        const departments = [
            {
                id: '6c8497ca-ffdf-4866-b5f9-f771df3f74b1',
                name: 'Tech',
                employeeIds: [
                    '13c5a88b-44c5-466b-9175-9c9aa38f90fe',
                    '812d39b4-58af-4afd-8a61-66c46d0501c3',
                    '50ded403-512a-4a48-b7b9-d36ce49442e6',
                ],
            },
            {
                id: 'f3770943-3fc3-4b48-bd7f-6f5fe5e58d59',
                name: 'Finance',
                employeeIds: [
                    'd7bcde27-1e88-4f81-b8a2-f0bd258c3f2c',
                    '0ad16d05-f6e6-48ba-91ad-a59c86de90b0',
                ],
            },
            {
                id: '2d27431a-183d-46c5-a699-d09f9b3c1306',
                name: 'HR',
                employeeIds: [
                    'cce9111a-24f1-4b82-a84a-5c9ba8468d41',
                    'dd686734-e56f-489a-9257-07c2c59725ec',
                ],
            },
        ];
        const employees = [
            {
                id: '13c5a88b-44c5-466b-9175-9c9aa38f90fe',
                departmentId: '6c8497ca-ffdf-4866-b5f9-f771df3f74b1',
                name: 'Brian',
                surname: 'Test',
                photourl: '',
                birthday: '1978-04-24',
            },
            {
                id: '812d39b4-58af-4afd-8a61-66c46d0501c3',
                departmentId: '6c8497ca-ffdf-4866-b5f9-f771df3f74b1',
                name: 'Sofie',
                surname: 'Test',
                photourl: '',
                birthday: '1993-07-06',
            },
            {
                id: '50ded403-512a-4a48-b7b9-d36ce49442e6',
                departmentId: '6c8497ca-ffdf-4866-b5f9-f771df3f74b1',
                name: 'Jens',
                surname: 'Test',
                photourl: '',
                birthday: '1980-02-14',
            },
            {
                id: 'd7bcde27-1e88-4f81-b8a2-f0bd258c3f2c',
                departmentId: 'f3770943-3fc3-4b48-bd7f-6f5fe5e58d59',
                name: 'Lars',
                surname: 'Test',
                photourl: '',
                birthday: '1987-02-03',
            },
            {
                id: '0ad16d05-f6e6-48ba-91ad-a59c86de90b0',
                departmentId: 'f3770943-3fc3-4b48-bd7f-6f5fe5e58d59',
                name: 'Ida',
                surname: 'Test',
                photourl: '',
                birthday: '1990-11-01',
            },
            {
                id: 'cce9111a-24f1-4b82-a84a-5c9ba8468d41',
                departmentId: '2d27431a-183d-46c5-a699-d09f9b3c1306',
                name: 'Rikke',
                surname: 'Test',
                photourl: '',
                birthday: '1992-08-20',
            },
            {
                id: 'dd686734-e56f-489a-9257-07c2c59725ec',
                departmentId: '2d27431a-183d-46c5-a699-d09f9b3c1306',
                name: 'Nikolaj',
                surname: 'Test',
                photourl: '',
                birthday: '1996-04-20',
            },
        ];
        return { departments, employees };
    }

    constructor() { }
}
