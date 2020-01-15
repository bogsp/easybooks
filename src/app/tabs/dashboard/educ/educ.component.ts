import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../store/models';

@Component({
  selector: 'app-educ',
  templateUrl: './educ.component.html',
  styleUrls: ['./educ.component.scss'],
})
export class EducComponent implements OnInit {
  @Input() category: Category;
  curr = '';
  amount = 500;

  constructor() { }

  ngOnInit() {}

}
