import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../store/models';

@Component({
  selector: 'app-trans',
  templateUrl: './trans.component.html',
  styleUrls: ['./trans.component.scss'],
})
export class TransComponent implements OnInit {
  @Input() category: Category;
  curr = '';
  amount = 500;

  constructor() { }

  ngOnInit() {}

}
