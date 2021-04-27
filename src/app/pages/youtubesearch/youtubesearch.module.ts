import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {YoutubesearchComponent} from './youtubesearch.component';
import {IonicModule} from '@ionic/angular';
import {ReactiveFormsModule} from "@angular/forms";

const ytRoutes : Routes = [
  {
    path: '',
    component: YoutubesearchComponent
  }
];

@NgModule({
  declarations: [YoutubesearchComponent],
  imports: [
    CommonModule,
      RouterModule.forChild(ytRoutes),
      IonicModule,
      ReactiveFormsModule
  ]
})
export class YoutubesearchModule { }
