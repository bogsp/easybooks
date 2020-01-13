import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trans',
  templateUrl: './trans.component.html',
  styleUrls: ['./trans.component.scss'],
})
export class TransComponent implements OnInit {
  curr = '';
  amount = 500;

  constructor() { }

  ngOnInit() {}

}
