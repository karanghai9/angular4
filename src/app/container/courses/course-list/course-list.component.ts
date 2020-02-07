import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
 
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [ 
    new Course('Artificial Intelligence','Artificial intelligence (AI)...','https://cdn.pixabay.com/photo/2018/09/18/11/19/artificial-intelligence-3685928_960_720.png'),
    new Course('Angular8','Angular8 framework...','https://upload.wikimedia.org/wikipedia/commons/c/ca/AngularJS_logo.svg'),
    new Course('React','React JS is a...','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png')
  ];
  constructor() { }

  ngOnInit() {
  }

}
