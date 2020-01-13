import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-living',
  templateUrl: './living.component.html',
  styleUrls: ['./living.component.scss'],
})
export class LivingComponent implements OnInit {
  curr = '';
  amount = 500;

  constructor() { }

  ngOnInit() {}

}
