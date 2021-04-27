import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlayvideoComponent} from "./playvideo.component";
import {IonicModule} from "@ionic/angular";

@NgModule({
  declarations: [PlayvideoComponent],
  imports: [
    CommonModule,
      IonicModule
  ]
})
export class PlayvideoModule { }
