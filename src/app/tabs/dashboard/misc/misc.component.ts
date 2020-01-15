import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../store/models';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss'],
})
export class MiscComponent implements OnInit {
  @Input() category: Category;
  curr = '';
  amount = 500;

  constructor() { }

  ngOnInit() { }

}
