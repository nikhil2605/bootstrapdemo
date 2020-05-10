import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: Student;
  @Output() studentModifiedInfo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeStudentData(name, age, email, dob) {
    this.studentModifiedInfo.emit({
      studentName: name,
      studentAge: age,
      studentEmail: email,
      studentDob: dob
    });
  }


  clearStuentData() {
    this.student.name = null;
    this.student.age = null;
    this.student.email = null;
    this.student.dob = null;
  }


}
