import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, @Inject('nodeUrl') private nodeUrl) { }

  getUserInfoOf(userId: string) {
    let params = new HttpParams().set('userId', userId);
    return this.http.get(this.nodeUrl + '/users/info', { params });
  }

  getHasConcernedOf(concernedUserId: string): Observable<boolean> {
    let params = new HttpParams().set('concernedUserId', concernedUserId);
    return <Observable<boolean>>this.http.get(this.nodeUrl + '/users/concerned', { params });
  }

  concern(userId, concernedUserId) {
    return this.http.post(this.nodeUrl + '/operates/concern', {
      userId: userId, 
      concernedUserId: concernedUserId
    });
  }

  cancelConcern(userId, concernedUserId) {
    return this.http.post(this.nodeUrl + '/operates/cancelConcern', {
      userId: userId, 
      concernedUserId: concernedUserId
    })
  }

  getConcernedListOf(userId) {
    let params = new HttpParams().set('userId', userId);
    return this.http.get(this.nodeUrl + '/users/concernList', { params });
  }
}
