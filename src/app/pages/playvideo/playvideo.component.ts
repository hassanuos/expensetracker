import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-playvideo',
  templateUrl: './playvideo.component.html',
  styleUrls: ['./playvideo.component.scss'],
})
export class PlayvideoComponent implements OnInit {

  videoId;
  title;

  constructor(private modalController: ModalController, private senitizeUrl: DomSanitizer) {

  }

  ngOnInit() {
    console.log(this.videoId, this.title);
    console.log(this.makeVideoURL());
  }

  dismissModal(): void {
    this.modalController.dismiss().then().catch();
  }

  makeVideoURL(){
    let ytUrl = 'https://www.youtube.com/embed/'+this.videoId+'?rel=0';

    return this.senitizeUrl.bypassSecurityTrustResourceUrl(ytUrl);
  }

}
