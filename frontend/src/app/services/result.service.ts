import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../model/result.modal';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  url = 'http://localhost:3000/result';
  constructor(private http:HttpClient) { }

  addResult(userForm,className) {
    return this.http.post(`${this.url}/${className}`,userForm);
  }

  findResult(resultForm){
    return this.http.post(this.url,resultForm);
  }
}
