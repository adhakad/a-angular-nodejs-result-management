import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassService } from '../services/class.service';
import { SubjectService } from '../services/subject.service';
import { ClassSubjectService } from '../services/class-subject.service';
import { Class } from '../model/class.model';
import { Subject } from '../model/subject.model';
import { ClassSubject } from '../model/classSubject.modal';

@Component({
  selector: 'app-class-subject',
  templateUrl: './class-subject.component.html',
  styleUrls: ['./class-subject.component.css']
})
export class ClassSubjectComponent implements OnInit {
  classSubjectForm : FormGroup;
  showModal:boolean = false;
  editMode:boolean = false;

  classSubject:ClassSubject[];
  class:Class[];
  subject:Subject[];
  constructor(private fb:FormBuilder,private classService:ClassService,private subjectService:SubjectService,private classSubjectService:ClassSubjectService) { }

  ngOnInit(): void {
    this.getClassSubject();
    this.getClass();
    this.getSubject();
    this.classSubjectForm = this.fb.group({
      _id:[''],
      className:['',Validators.required],
      subjectName:['',Validators.required],
    })
  }

  getClassSubject(){
    this.classSubjectService.getClassSubjectList().subscribe(res => {
      if(res){
        this.classSubject = res;
      }
    })
  }

  getClass(){
    this.classService.getClassList().subscribe(res => {
      if(res){
        this.class = res;
      }
    })
  }

  getSubject(){
    this.subjectService.getSubjectList().subscribe(res => {
      if(res){
        this.subject = res;
      }
    })
  }
  classSubjectSubmit(){
    if(this.classSubjectForm.valid){
      if(this.editMode){
        this.classSubjectService.updateClassSubject(this.classSubjectForm.value).subscribe(res => {
          this.closeModal();
          this.getClassSubject();
        })
      }else{
        this.classSubjectService.addClassSubject(this.classSubjectForm.value).subscribe(res => {
          this.closeModal();
          this.getClassSubject();
        })
      }
    }
  }

  editClassSubject(classSubject:ClassSubject){
    this.showModal=true;
    this.editMode=true;
    this.classSubjectForm.patchValue(classSubject);
  }

  deleteClassSubject(id){
    this.classSubjectService.deleteClassSubject(id).subscribe(res => {
      if(res){
        this.closeModal();
        this.getClassSubject();
      }
    },err => {console.log(err)})
  }

  addClassSubject(){
    this.showModal = true;
    this.classSubjectForm.reset();
  }

  closeModal(){
    this.showModal=false;
    this.editMode=false;
  }
}
