import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss'],
})
export class MiscComponent implements OnInit {
  curr = '';
  amount = 500;
  items = [
    { category: 'Pet Supplies' },
    { category: 'Pet Grooming' },
  ];

  constructor() { }

  ngOnInit() { }

}
