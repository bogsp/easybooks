import { Component, OnInit } from '@angular/core';
import {
  CategoryService,
  ExpenseService,
  IncomeService,
  ProfileService,
} from '../../store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  curr = '';
  amount = 500;
  totalIncome = 1500;
  totalExpenses: number;
  totalHome = 500;
  totalLiving = 300;
  totalTrans = 200;
  totalEduc = 200;
  totalMisc = 100;
  showHome = false;
  showLiving = false;
  showTrans = false;
  showEduc = false;
  showMisc = false;

  constructor(
    private categoryService: CategoryService,
    // private expenseService: ExpenseService,
    // private incomeService: IncomeService,
    // private profileService: ProfileService,
  ) { }

  ngOnInit() {
    this.totalExpenses =
      this.totalHome +
      this.totalLiving +
      this.totalTrans +
      this.totalEduc +
      this.totalMisc;
  }

  add() { }

  toggleHome(e: any) { this.showHome = !this.showHome; }
  toggleLiving(e: any) { this.showLiving = !this.showLiving; }
  toggleTrans(e: any) { this.showTrans = !this.showTrans; }
  toggleEduc(e: any) { this.showEduc = !this.showEduc; }
  toggleMisc(e: any) { this.showMisc = !this.showMisc; }

}
