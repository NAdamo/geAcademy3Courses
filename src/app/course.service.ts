import {Injectable} from '@angular/core';
import {Course} from './course';
import {CourseInititatorService} from './course-inititator.service';

@Injectable()
export class CourseService {
  private course: Course;

  constructor(private initiator: CourseInititatorService) {
  }

  // constructor() {
  // }

  initCourse() {
    // const service = new CourseInititatorService();
    // this.course = service.init();
    this.course = this.initiator.init();
    return this.course;
  }

  saveCourse(course: Course) {
    this.course = course;
  }

  getCourse() {
    return this.course;
  }
}
