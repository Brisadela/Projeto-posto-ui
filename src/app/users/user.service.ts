import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  add(user: User): Promise<User> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<any>(this.usersUrl, user, { headers })
      .toPromise();
  }
}
