import { Component, OnInit } from '@angular/core';
import { SpendingList, spendings } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  spendings: Array<SpendingList> | null = spendings;

  updateSpendingList(spendingList: SpendingList) {
    localStorage.setItem('balance-app-data', JSON.stringify(this.spendings));
  }

  constructor() {
    let test: string | null = localStorage.getItem('balance-app-data');

    if (test) {
      this.spendings = JSON.parse(test);
    }
  }

  ngOnInit(): void {}
}
