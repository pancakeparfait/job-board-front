import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getJobs() {
    return this.http.get('http://localhost:3000/job');
  }

  // getUsers() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users')
  // }
}
