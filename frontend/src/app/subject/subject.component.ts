import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from '../model/subject.model';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjectForm : FormGroup;
  showModal:boolean = false;
  editMode:boolean = false;
  subject:Subject[];
  constructor(private fb:FormBuilder,private subjectService:SubjectService) { }

  ngOnInit(): void {
    this.getSubject();
    this.subjectForm = this.fb.group({
      _id:[''],
      subjectName:['',Validators.required],
    })
  }

  getSubject(){
    this.subjectService.getSubjectList().subscribe(res => {
      if(res){
        this.subject = res;
      }
    })
  }

  addSubject(){
    this.showModal=true;
    this.subjectForm.reset();
  }
  editSubject(subject:Subject){
    this.showModal=true;
    this.editMode=true;
    this.subjectForm.patchValue(subject)
  }

  deleteSubject(id){
    this.subjectService.deleteSubject(id).subscribe(res => {
      this.getSubject();
    },err => {
      console.log(err);
    })
  }

  subjectSubmit(){
    if(this.subjectForm.valid){
      if(this.editMode){
        this.subjectService.updateSubject(this.subjectForm.value).subscribe(res => {
          this.getSubject();
          this.closeModal();
        })
      }else{
        this.subjectService.addSubject(this.subjectForm.value).subscribe(res => {
          this.getSubject();
          this.closeModal();
        })
      }
    }
  }

  closeModal(){
    this.showModal=false;
    this.editMode=false;
  }

}
