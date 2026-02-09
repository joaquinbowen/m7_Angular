import { Component, Input } from '@angular/core';
import { Student } from '../../model/Student';

@Component({
  selector: 'tr[app-student-item]',
  imports: [],
  templateUrl: './student-item.html',
  styleUrl: './student-item.css',
})
export class StudentItem {
  @Input() item!: Student;
}
