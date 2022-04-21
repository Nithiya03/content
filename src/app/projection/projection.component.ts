import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.scss']
})
export class ProjectionComponent implements OnInit {
  @Input('header') header:string='';
  today = new Date().toDateString();
  constructor() { }

  ngOnInit(): void {
  }

}
