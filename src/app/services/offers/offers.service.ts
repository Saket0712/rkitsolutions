import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import {HttpClient} from '@angular/common/http'
import { Users } from '../../Users'

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:3000/Users";

  getUsers(){
    return this.http.get<Users[]>(this.url)
  }

}
