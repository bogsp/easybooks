import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../store/models';

@Component({
  selector: 'app-living',
  templateUrl: './living.component.html',
  styleUrls: ['./living.component.scss'],
})
export class LivingComponent implements OnInit {
  @Input() category: Category;
  curr = '';
  amount = 500;

  constructor() { }

  ngOnInit() {}

}
