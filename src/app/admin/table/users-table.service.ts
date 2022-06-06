import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from './usersInterface';

@Injectable({
  providedIn: 'root'
})
export class UsersTableService {
  url="http://localhost:3000/user";
  constructor(private http:HttpClient){}
  getUsers():Observable <IUsers[]> {
    return this.http.get<IUsers[]>(this.url);
  }
}
