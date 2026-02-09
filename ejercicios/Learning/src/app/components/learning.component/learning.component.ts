import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { LearningService } from '../../services/learning.service';
import { CourseComponent } from '../course/course';
import { StudentComponent } from '../student/student';

@Component({
  selector: 'app-learning',
  imports: [CourseComponent, StudentComponent],
  templateUrl: './learning.html',

})
export class LearningComponent implements OnInit {
  course!: Course;
  constructor(private service: LearningService) { }
  ngOnInit(): void {
    this.course = this.service.getCourse();
  }

}
