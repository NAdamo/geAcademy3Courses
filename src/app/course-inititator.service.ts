import {Injectable} from '@angular/core';
import {Course, CourseType} from './course';

@Injectable()
export class CourseInititatorService {
  course: Course;

  init() {
    this.course = new Course(1, '', 'This is the course description', CourseType.BOOTCAMP, false);
    // return  'cica';
    return this.course;
  }

  constructor() {
  }

}
