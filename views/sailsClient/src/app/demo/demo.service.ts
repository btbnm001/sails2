import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { User } from './model/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private URL = environment.apiUrl + '/user/';
  private ADD = this.URL + 'add';
  private EDIT = this.URL + 'upd';
  private READ = this.URL + 'all';
  private DELETE = this.URL + 'del';

  constructor(private http: Http) { }

  public getUser(): Observable<User[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.READ, options).pipe(
      map((response: any) => response.json())
    );
  }

  public deleteUser(id: String): Observable<User> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.DELETE, id, options).pipe(
      map((response: any) => response.json())
    );
  }

  public addUser(user: User): Observable<User> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.ADD, user, options).pipe(
      map((response: any) => response.json())
    );
  }

  public editUser(user: User): Observable<User> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.EDIT, user, options).pipe(
      map((response: any) => response.json())
    );
  }

}
