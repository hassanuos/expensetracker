import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class YtserviceService {

  constructor(private http: HttpClient) { }


  getPlaylistVideos(playlistId: string, count: number, pageToken: string): Promise<any> {
    try {
      if (pageToken) {
        console.log('incoming pageToken: ', pageToken);
        return new Promise(resolve => {
          this.http.get(`${ environment.youtube.baseUrl }playlistItems?key=${ environment.youtube.apiKey }&playlistId=${ playlistId }&part=snippet,id&maxResults=${ count }&pageToken=${ pageToken }&order=date`)
              .subscribe(data => {
                resolve(data);
              }, error => {
                console.error(error);
              });
        });
      } else {
        console.log('no page token');
        return new Promise(resolve => {
          this.http.get(`${ environment.youtube.baseUrl }playlistItems?key=${ environment.youtube.apiKey }&playlistId=${ playlistId }&part=snippet,id&maxResults=${ count }&order=date`)
              .subscribe(data => {
                resolve(data);
              }, error => {
                console.error(error);
              });
        });
      }
    } catch (error) {
      console.error('Error: something really bad happened trying to get the videos.');
      console.error(error);
    }
  }
}
