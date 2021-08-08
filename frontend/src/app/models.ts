export interface Department {
    id: string;
    name: string;
    employeeIds: string[];
}

export interface Employee {
    id: string;
    departmentId: string;
    departmentName: string;
    name: string;
    surname: string;
    photoUrl: string;
    birthday: string;
}
