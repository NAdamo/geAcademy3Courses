import {TestBed, inject} from '@angular/core/testing';

import {CourseInititatorService} from './course-inititator.service';
import {Course, CourseType} from './course';

fdescribe('CourseInititatorService', () => {
  let ci: CourseInititatorService;
  beforeEach(() => {
    ci = new CourseInititatorService();
  });

  it('should be created', () => {
    expect(ci).toBeTruthy();
  });

  describe('init', () => {
    it('should return a predefined course', () => {
      const expCourse = new Course(1, '', 'This is the course description', CourseType.BOOTCAMP, false);
      expect(ci.init()).toEqual(expCourse);
    });
  });
});
