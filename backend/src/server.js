const express = require('express');
const dayjs = require('dayjs');
dayjs.extend(require('dayjs/plugin/weekOfYear'));
const app = express();

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
        departmentName: 'Tech',
        name: 'Brian',
        surname: 'Test',
        photourl: '',
        birthday: '1978-08-08',
    },
    {
        id: '812d39b4-58af-4afd-8a61-66c46d0501c3',
        departmentId: '6c8497ca-ffdf-4866-b5f9-f771df3f74b1',
        departmentName: 'Tech',
        name: 'Sofie',
        surname: 'Test',
        photourl: '',
        birthday: '1993-08-10',
    },
    {
        id: '50ded403-512a-4a48-b7b9-d36ce49442e6',
        departmentId: '6c8497ca-ffdf-4866-b5f9-f771df3f74b1',
        departmentName: 'Tech',
        name: 'Jens',
        surname: 'Test',
        photourl: '',
        birthday: '1980-08-14',
    },
    {
        id: 'd7bcde27-1e88-4f81-b8a2-f0bd258c3f2c',
        departmentId: 'f3770943-3fc3-4b48-bd7f-6f5fe5e58d59',
        departmentName: 'Finance',
        name: 'Lars',
        surname: 'Test',
        photourl: '',
        birthday: '1987-02-03',
    },
    {
        id: '0ad16d05-f6e6-48ba-91ad-a59c86de90b0',
        departmentId: 'f3770943-3fc3-4b48-bd7f-6f5fe5e58d59',
        departmentName: 'Finance',
        name: 'Ida',
        surname: 'Test',
        photourl: '',
        birthday: '1990-08-25',
    },
    {
        id: 'cce9111a-24f1-4b82-a84a-5c9ba8468d41',
        departmentId: '2d27431a-183d-46c5-a699-d09f9b3c1306',
        departmentName: 'HR',
        name: 'Rikke',
        surname: 'Test',
        photourl: '',
        birthday: '1992-08-16',
    },
    {
        id: 'dd686734-e56f-489a-9257-07c2c59725ec',
        departmentId: '2d27431a-183d-46c5-a699-d09f9b3c1306',
        departmentName: 'HR',
        name: 'Nikolaj',
        surname: 'Test',
        photourl: '',
        birthday: '1996-04-20',
    },
];

// Allow cross origin requests for debugging
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

app.get('/departments', function (req, res) {
    res.end(JSON.stringify(departments));
});

app.get('/employees', function (req, res) {
    console.log(req.originalUrl);
    const filters = req.query;
    const filteredEmployees = employees.filter(employee => {
        var now = dayjs();
        var bday = dayjs(employee.birthday);
        if (filters.month) {
            var thisMonth = now.month();
            var bdayMonth = bday.month();
            if (thisMonth != bdayMonth) { return false; }
        }
        if (filters.week) {
            var thisWeek = now.week();
            var bdayWeek = bday.week();
            if (thisWeek != bdayWeek) { return false; }
        }
        if (filters.departments) {
            return filters.departments.includes(employee.departmentId);
        }
        return true
    });
    res.end(JSON.stringify(filteredEmployees));
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("API app listening at http://%s:%s", host, port)
});
