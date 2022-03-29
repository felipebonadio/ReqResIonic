import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }
  urlApi = 'https://reqres.in/api/users'

  getAllUsers(url:string ): Observable<User[]>{
    
    return this.http.get<User[]>(url);
  }
}
