import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from '../model/subject.model';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  url = 'http://localhost:3000/subject';
  constructor(private http:HttpClient) { }

  addSubject(subjectData:Subject){
    return this.http.post(this.url,subjectData);
  }
  getSubjectList() {
    return this.http.get<Subject[]>(this.url);
  }
  updateSubject(subjectData:Subject){
    return this.http.put(`${this.url}/${subjectData._id}`, subjectData);
  }
  deleteSubject(id){
    return this.http.delete(`${this.url}/${id}`);
  }
}
