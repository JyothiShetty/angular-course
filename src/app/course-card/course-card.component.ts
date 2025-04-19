import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input() course!: Course;
  @Input({required: true}) index!: number;
  @Output() courseView = new EventEmitter<any>();

  onCourseView() {
    this.courseView.emit(this.course);
    console.log('btn click');
  }
}
