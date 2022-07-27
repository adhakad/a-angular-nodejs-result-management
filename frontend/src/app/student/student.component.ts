import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { ClassService } from '../services/class.service';
import { Student } from '../model/student.modal';
import { Class } from '../model/class.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentForm : FormGroup;
  showModal:boolean = false;
  editMode:boolean = false;
  class:Class[];
  student:Student[];

  constructor(private fb:FormBuilder,private classService:ClassService,private studentService:StudentService) { }

  ngOnInit(): void {
    this.getStudent();
    this.getClass();
    this.studentForm = this.fb.group({
      _id:[''],
      studentId:['',Validators.required],
      studentName:['',Validators.required],
      rollNumber:['',Validators.required],
      className:['',Validators.required],
    })
  }

  getClass(){
    this.classService.getClassList().subscribe(res => {
      if(res){
        this.class = res;
      }
    })
  }

  studentSubmit(){
    if(this.studentForm.valid){
      if(this.editMode){
        this.studentService.updateStudent(this.studentForm.value).subscribe(res => {
          this.closeModal();
          this.getStudent();
        },err => console.log(err))
      }else{
        this.studentService.addStudent(this.studentForm.value).subscribe(res => {
          this.closeModal();
          this.getStudent();
        },err => console.log(err))
      }
    }
  }

  getStudent(){
    this.studentService.getStudentList().subscribe(res => {
      if(res){
        this.student = res;
      }
    })
  }

  editStudent(student:Student){
    this.showModal=true;
    this.editMode=true;
    this.studentForm.patchValue(student);
  }

  deleteStudent(id){
    this.studentService.deleteStudent(id).subscribe(res => {
      this.getStudent();
    },err => {console.log(err)})
  }

  addStudent(){
    this.showModal=true;
    this.studentForm.reset();
  }

  closeModal(){
    this.showModal=false;
    this.editMode=false;
  }

}
