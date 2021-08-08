import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoesListComponent } from './foes-list/foes-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/foes', pathMatch: 'full' },
    { path: 'foes', component: FoesListComponent },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
