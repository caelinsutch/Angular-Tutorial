
import { Component } from "@angular/core";
import {CoursesService} from "./courses.service";

@Component({
  selector: 'courses',
  template: `
    <h2> {{ title }} </h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()">
    <div></div>
    
    {{ text | summary:10}}
  `
})

export class CoursesComponent {
  title = "List of courses";
  courses;

  email="me@example.com";

  text="The material world is full of enlightenment. Urbs persuaderes, tanquam azureus stella."

  onKeyUp() {
    console.log(this.email);
  }

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

}
