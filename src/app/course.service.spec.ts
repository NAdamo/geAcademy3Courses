import {TestBed, inject} from '@angular/core/testing';

import {CourseService} from './course.service';
import {Course, CourseType} from './course';
import {CourseInititatorService} from './course-inititator.service';

fdescribe('CourseService', () => {
  let cs: CourseService;
  let initSpy;
  beforeEach(() => {
    // a
    // cs = new CourseService(new CourseInititatorService());

    // mock initiator
    const initiator = {
      init: () => {
        return new Course();
      }
    };
    cs = new CourseService(initiator as CourseInititatorService);
  });

  it('should be created', () => {
    expect(cs).toBeTruthy();
  });

  describe('initCourse', () => {
    it('should return a Course', () => {
      expect(cs.initCourse()).toEqual(jasmine.any(Course));
    });
  });

  describe('getCourse', () => {
    it('should get a course', () => {
      cs.initCourse();
      const course = cs.getCourse();
      expect(course).toEqual(jasmine.any(Course));
    });
  });


  describe('saveCourse', () => {
    it('should save the new course', () => {
      const expctedCourse = new Course(2, 'asd', 'this is description', CourseType.LIVE_VIRTUAL, true);
      cs.saveCourse(expctedCourse);
      expect(cs.getCourse()).toEqual(expctedCourse);
    });
  });
});

fdescribe('CourseService with mock', () => {
  let service: CourseService;
  const spyInit = jasmine.createSpyObj('initiator', ['init']);

  beforeEach(() => {
    service = new CourseService(spyInit);
  });

  it('should have call initiator init', () => {
    service.initCourse();
    expect(spyInit.init).toHaveBeenCalled();
  });
})
