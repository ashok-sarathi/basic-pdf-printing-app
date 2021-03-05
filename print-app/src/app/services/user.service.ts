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

  get(): Observable<User[]> {
    return this.http.get<User[]>(environment.api + `user`);
  }

  getSingle(id: string): Observable<User> {
    return this.http.get<User>(environment.api + `user/${id}`);
  }

  create(data: User): Observable<string> {
    return this.http.post<string>(environment.api + `user`, data);
  }

  update(data: User): Observable<string> {
    return this.http.put<string>(environment.api + `user`, data);
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(environment.api + `user/${id}`);
  }

}
