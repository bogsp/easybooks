import { Component, OnInit, Input } from '@angular/core';
import { Category, Expense } from '../../../store/models';

@Component({
  selector: 'app-living',
  templateUrl: './living.component.html',
  styleUrls: ['./living.component.scss'],
})
export class LivingComponent implements OnInit {
  @Input() category: Category;
  @Input() expenses: Expense[];
  curr = '';
  amount = 500;

  constructor() { }

  ngOnInit() {}

}
