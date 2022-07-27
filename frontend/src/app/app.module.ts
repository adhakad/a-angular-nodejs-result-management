import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClassComponent } from './class/class.component';
import { HttpClientModule } from '@angular/common/http';
import { SubjectComponent } from './subject/subject.component';
import { ClassSubjectComponent } from './class-subject/class-subject.component';
import { StudentComponent } from './student/student.component';
import { ResultComponent } from './result/result.component';
import { AddResultComponent } from './add-result/add-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    SubjectComponent,
    ClassSubjectComponent,
    StudentComponent,
    ResultComponent,
    AddResultComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
