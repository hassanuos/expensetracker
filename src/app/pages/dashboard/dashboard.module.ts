import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {IonicModule} from '@ionic/angular';
import {SharedModule} from '../../shared/components/shared.module';

const dashboardRoutes: Routes = [
    {path: '', component: DashboardComponent},
];


@NgModule({
  declarations: [DashboardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(dashboardRoutes),
        IonicModule,
        SharedModule
    ]
})
export class DashboardModule { }
