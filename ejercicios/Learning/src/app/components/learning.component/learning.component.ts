import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { LearningService } from '../../services/learning.service';

@Component({
  selector: 'app-learning',
  imports: [],
  templateUrl: './learning.html',
  styleUrl: './learning.component.css',
})
export class LearningComponent implements OnInit{
  course!:Course;
  constructor(private service:LearningService){}
  ngOnInit(): void {
    this.course=this.service.getCourse();
  }

}
