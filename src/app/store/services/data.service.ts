import { Injectable } from '@angular/core';
import { Expense } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  expenses: Expense[];

  constructor() { }
}
