import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Class } from '../model/class.model';


@Injectable({
  providedIn: 'root'
})
export class ClassService {

  url = 'http://localhost:3000/class';
  constructor(private http:HttpClient) { }

  addClass(classData:Class){
    return this.http.post(this.url,classData);
  }
  getClassList() {
    return this.http.get<Class[]>(this.url);
  }
  updateClass(classData:Class){
    return this.http.put(`${this.url}/${classData._id}`, classData);
  }
  deleteClass(id){
    return this.http.delete(`${this.url}/${id}`);
  }
}
