import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educ',
  templateUrl: './educ.component.html',
  styleUrls: ['./educ.component.scss'],
})
export class EducComponent implements OnInit {
  curr = '';
  amount = 500;

  constructor() { }

  ngOnInit() {}

}
