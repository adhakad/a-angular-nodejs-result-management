import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Class } from '../model/class.model';
import { ClassService } from '../services/class.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  classForm : FormGroup;
  showModal:boolean = false;
  editMode:boolean = false;
  class:Class[];

  constructor(private fb:FormBuilder,private classService:ClassService) { }

  ngOnInit(): void {
    this.getClass();
    this.classForm = this.fb.group({
      _id:[''],
      className:['',Validators.required],
    })
  }

  getClass(){
    this.classService.getClassList().subscribe((res:Class[]) => {
      if(res){
        this.class = res;
      }
    })
  }

  editClass(cls:Class){
    this.showModal=true;
    this.editMode=true;
    this.classForm.patchValue(cls);
  }

  classSubmit(){
    if(this.classForm.valid){
      if(this.editMode){
        this.classService.updateClass(this.classForm.value).subscribe(res => {
          this.closeModal();
          this.getClass();
        },err => console.log(err))
      }else{
        this.classService.addClass(this.classForm.value).subscribe(res => {
          this.closeModal();
          this.getClass();
        },err => console.log(err))
      }
    }
  }

  deleteClass(id){
    this.classService.deleteClass(id).subscribe(res => {
      this.getClass();
    },err => {console.log(err)})
  }

  addClass(){
    this.showModal = true;
    this.classForm.reset();
  }
  closeModal(){
    this.showModal=false;
    this.editMode=false;
  }

}
