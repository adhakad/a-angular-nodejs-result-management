import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Class } from '../model/class.model';
import { ClassSubject } from '../model/classSubject.modal';
import { ClassService } from '../services/class.service';
import { ClassSubjectService } from '../services/class-subject.service';
import { ResultService } from '../services/result.service';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.css']
})
export class AddResultComponent implements OnInit {
  class:Class[];
  classSubject:ClassSubject[];
  showModal:boolean=false;
  userForm: FormGroup;
  fields: any;
  cls : any;
  abc:any[]=[];
  constructor(private fb:FormBuilder,private classService:ClassService,private classSubjectService:ClassSubjectService,private resultService:ResultService) { }

  ngOnInit(): void {
    this.getClass();
    this.userForm = this.fb.group({
      rollNumber:[''],
      type: this.fb.group({
        options: this.fb.array([])
      })
    });
  }
  getClass(){
    this.classService.getClassList().subscribe((res:Class[]) => {
      if(res){
        this.class = res;
      }
    })
  }
  getClassSubject(id){
    this.classSubjectService.getClassSubjectListById(id).subscribe(res => {
      if(res){
        this.showModal=true;
        this.classSubject = res;
        this.cls = this.classSubject[0].className;
        this.patch()
      }
    })
  }

  submit() {
    // console.log(this.userForm.value)
    this.resultService.addResult(this.userForm.value,this.abc[0].className).subscribe(res => {
    },err => console.log(err))
  }
  patch() {
    const control = <FormArray>this.userForm.get('type.options');
    this.classSubjectService.getClassSubjectListById(this.cls).subscribe(res => {
      this.fields = res;
      this.abc = res
      this.fields.forEach(x => {
        control.push(this.patchValues(x.subjectName))
        this.userForm.reset();
      })
    })
  }

  patchValues(subjectName) {
    return this.fb.group({
      subjectName:[subjectName]
    })
  }
}
