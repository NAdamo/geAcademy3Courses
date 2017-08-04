import {Component, OnInit} from '@angular/core';
import {Course, CourseTypeDictionary} from '../course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  course = new Course();
  courseTypes = CourseTypeDictionary;


  constructor() {
  }

  ngOnInit() {
  }

  submit() {
    // form submission
    alert('Form submited! name:' + this.course.name);
  }

}
