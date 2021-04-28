import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ModalController} from "@ionic/angular";
import {PlayvideoComponent} from "../playvideo/playvideo.component";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {map, switchMap, debounceTime, distinctUntilChanged, filter} from "rxjs/operators";

@Component({
  selector: 'app-youtubesearch',
  templateUrl: './youtubesearch.component.html',
  styleUrls: ['./youtubesearch.component.scss'],
})
export class YoutubesearchComponent implements OnInit {

  constructor(private http: HttpClient, private modalController: ModalController) { }

  ytsearch = new FormControl('', Validators.required);
  // results: Array<Object> = [] ;
  results: Observable<any>;


    ngOnInit() {
      this.searchTextChanges();
      console.log(this.ytsearch.value);
  }

  searchTextChanges(event?):void {

      // filter and distinctUntilChanged not working.
      // ------------------------------------------------------------------

      // this.ytsearch.valueChanges.pipe(
      //     debounceTime(500),
      //     filter(value => value.length > 3),
      //     distinctUntilChanged(),
      //     switchMap(searchTerm => this.http.get<any>(`${environment.youtube.baseUrl}?q=${searchTerm}&key=${environment.youtube.apiKey}&part=snippet`)),
      //     map(response => response.items)
      // );

      // ------------------------------------------------------------------
      // Switch Map example

      this.ytsearch.valueChanges.pipe(
          debounceTime(500),
          switchMap((searchTerm) => this.http.get<any>(`${environment.youtube.baseUrl}?q=${searchTerm}&key=${environment.youtube.apiKey}&part=snippet`))
      ).subscribe((result) => {
          console.log(result);
          this.results = result.items;
      });

      // ------------------------------------------------------------------
      // Simple Search

      // this.ytsearch.valueChanges.subscribe((searchtxt) => {
      //
      //     this.http.get<any>(`${environment.youtube.baseUrl}?q=${searchtxt}&key=${environment.youtube.apiKey}&part=snippet`).subscribe((result) => {
      //         console.log(result);
      //         this.results = result.items;
      //     });
      //
      // });
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
