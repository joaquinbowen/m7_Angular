import { Component, Input } from '@angular/core';
import { Student } from '../../model/Student';
import { StudentItem } from '../student-item/student-item';

@Component({
  selector: 'app-student',
  imports: [StudentItem],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class StudentComponent {
  @Input() students!: Student[]
}
