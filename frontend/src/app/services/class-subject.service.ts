import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassSubject } from '../model/classSubject.modal';

@Injectable({
  providedIn: 'root'
})
export class ClassSubjectService {

  url = 'http://localhost:3000/class-subject';
  constructor(private http:HttpClient) { }

  addClassSubject(classSubjectData:ClassSubject){
    return this.http.post(this.url,classSubjectData);
  }
  getClassSubjectList() {
    return this.http.get<ClassSubject[]>(this.url);
  }
  getClassSubjectListById(id) {
    return this.http.get<ClassSubject[]>(`${this.url}/${id}`);
  }
  updateClassSubject(classSubjectData:ClassSubject){
    return this.http.put(`${this.url}/${classSubjectData._id}`, classSubjectData);
  }
  deleteClassSubject(id){
    return this.http.delete(`${this.url}/${id}`);
  }

  addResult(userForm,className) {
    console.log(userForm)
    return this.http.post(`${this.url}/${className}`,userForm);
  }
}
