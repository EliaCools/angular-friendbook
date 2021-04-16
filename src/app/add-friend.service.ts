import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from './friend';
import {observable, Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  http;
  url = 'http://localhost:9000/addFriend';
  constructor(http: HttpClient) {
    this.http = http;
  }

  addfriend(data: Friend): Observable<Friend>{

    return this.http.post<Friend>(this.url, data);
  }

 // getfriend(): Observable<any>{
 //  return this.http.get<any>(this.url);
 // }
}
