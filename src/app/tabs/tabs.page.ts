import { Component, OnInit } from '@angular/core';
import { AuthService } from '../store';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  uid: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.uid = this.authService.user.id;
  }

}
