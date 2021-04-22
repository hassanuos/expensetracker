import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ActivityComponent} from './activity.component';
import {IonicModule} from "@ionic/angular";

const activityRoutes : Routes = [
    {
      path: '',
      component: ActivityComponent
    }
];

@NgModule({
  declarations: [ActivityComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(activityRoutes),
        IonicModule
    ]
})
export class ActivityModule { }
