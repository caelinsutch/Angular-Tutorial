import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  constructor() { }

  @Input('title') title;
  isExpanded: boolean = false;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {
  }

}
