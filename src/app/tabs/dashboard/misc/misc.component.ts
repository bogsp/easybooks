import { Component, OnInit, Input } from '@angular/core';
import { Category, Expense } from '../../../store/models';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss'],
})
export class MiscComponent implements OnInit {
  @Input() category: Category;
  @Input() expenses: Expense[];
  curr = '';
  amount = 500;

  constructor() { }

  ngOnInit() { }

}
