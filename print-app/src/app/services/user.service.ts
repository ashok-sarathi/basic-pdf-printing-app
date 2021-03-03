import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<User> {
    return this.http.get<User>(environment.api + "user");
  }

  create(data: User): Observable<User> {
    return this.http.post<User>(environment.api + "user", data);
  }

}
