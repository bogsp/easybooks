import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../store/models';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss'],
})
export class HouseComponent implements OnInit {
  @Input() category: Category;
  curr = '';
  amount = 500;

  constructor() { }

  ngOnInit() {}

}
