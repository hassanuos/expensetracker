import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ModalController} from "@ionic/angular";
import {PlayvideoComponent} from "../playvideo/playvideo.component";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-youtubesearch',
  templateUrl: './youtubesearch.component.html',
  styleUrls: ['./youtubesearch.component.scss'],
})
export class YoutubesearchComponent implements OnInit {

  constructor(private http: HttpClient, private modalController: ModalController) { }

  ytsearch = new FormControl('', Validators.required);
  results: Array<Object> = [] ;
  pageToken: string;

  ngOnInit() {
      this.searchTextChanges();
      console.log(this.ytsearch.value);
  }

  searchTextChanges(event?):void {
      this.ytsearch.valueChanges.subscribe((searchtxt) => {

          this.http.get<any>(`${environment.youtube.baseUrl}?q=${searchtxt}&key=${environment.youtube.apiKey}&part=snippet`).subscribe((result) => {
              console.log(result);
              this.pageToken = result.nextPageToken;
              // this.results = result.items;
              result.items.forEach(video => {
                  this.results.push(video);
              });

              // If event exists
              if (event) {
                  event.target.complete();
              }

          });


      });
  }

  onSearchTextChange({ target }): void {
    let searchText = target.value;

    this.http.get<any>(`${environment.youtube.baseUrl}?q=${searchText}&key=${environment.youtube.apiKey}&part=snippet`).subscribe((result) => {
        console.log(result.items);
        this.results = result.items;
    });
  }


  async presentVideoModal({target}, id: any, videoTitle: string) {

      const modal = await this.modalController.create({
          component: PlayvideoComponent,
          componentProps:{videoId: id, title: videoTitle},
          cssClass: 'my-custom-class'
      });
      return await modal.present();
  }

  loadDataVideos(event){
      this.searchTextChanges(event);
  }


}
