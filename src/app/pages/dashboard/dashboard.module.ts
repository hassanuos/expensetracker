import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {IonicModule} from "@ionic/angular";

const dashboardRoutes: Routes = [
    {path: '', component: DashboardComponent},
];


@NgModule({
  declarations: [DashboardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(dashboardRoutes),
        IonicModule
    ]
})
export class DashboardModule { }
