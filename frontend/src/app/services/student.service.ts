import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/student.modal';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = 'http://localhost:3000/student';
  constructor(private http:HttpClient) { }

  addStudent(studentData:Student){
    return this.http.post(this.url,studentData);
  }
  getStudentList() {
    return this.http.get<Student[]>(this.url);
  }
  updateStudent(studentData:Student){
    return this.http.put(`${this.url}/${studentData._id}`, studentData);
  }
  deleteStudent(id){
    return this.http.delete(`${this.url}/${id}`);
  }
}
