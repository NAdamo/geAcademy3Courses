export enum CourseType {INSTRUCTOR_LED, SELF_PACED, LIVE_VIRTUAL, BOOTCAMP}

export let CourseTypeDictionary = [
  {value: CourseType.SELF_PACED, label: 'Self Paced'},
  {value: CourseType.INSTRUCTOR_LED, label: 'Instructor led'},
  {value: CourseType.BOOTCAMP, label: 'Bootcamp'},
  {value: CourseType.LIVE_VIRTUAL, label: 'Live virtual'},
];

export class Course {
  constructor(public id?: number,
              public name?: string,
              public description?: string,
              public type?: CourseType,
              public isActive?: boolean) {
  }

}
