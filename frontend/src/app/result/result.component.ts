import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassService } from '../services/class.service';
import { SubjectService } from '../services/subject.service';
import { ClassSubjectService } from '../services/class-subject.service';
import { ResultService } from '../services/result.service';
import { Class } from '../model/class.model';
import { Subject } from '../model/subject.model';
import { ClassSubject } from '../model/classSubject.modal';
import { Result } from '../model/result.modal';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  resultForm : FormGroup;
  showModal:boolean = false;
  resultData:any;
  resultSingleData:any;
  
  constructor(private fb:FormBuilder,private classService:ClassService,private subjectService:SubjectService,private classSubjectService:ClassSubjectService,private resultServices:ResultService) { }

  ngOnInit(): void {
    this.resultForm = this.fb.group({
      className:['',Validators.required],
      rollNumber:['',Validators.required],
    })
  }

  findResult(){
    this.resultServices.findResult(this.resultForm.value).subscribe(res => {
      
        if(res){
          this.resultData = res;
          this.resultSingleData = res[0];
          this.showModal = true;
        }
      
    })
  }
}
