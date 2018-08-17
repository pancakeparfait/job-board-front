import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { SharedRoutingModule } from '../shared/shared-routing.module';


const employerRoutes: Routes = [
    {
        path: 'employer',
    component: EmpDashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(employerRoutes)],
    exports: [RouterModule]
})

export class EmployerRoutingModule {}
