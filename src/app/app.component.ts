import { Component, OnInit } from '@angular/core';
import { SpendingList, SpendingItem } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  spendings: Array<SpendingList> = [
    {
      name: '',
      list: [],
      listTotal: 0,
    },
  ];

  updateSpendingList(spendingList: SpendingList) {
    localStorage.setItem('balance-app-data', JSON.stringify(this.spendings));
  }

  constructor() {
    let savedSpendings: string | null =
      localStorage.getItem('balance-app-data');

    if (savedSpendings) {
      this.spendings = JSON.parse(savedSpendings);
    } else {
      this.spendings = [
        { name: 'Marcsi', list: [], listTotal: 0 },
        { name: 'Béci', list: [], listTotal: 0 },
      ];
    }
  }

  ngOnInit(): void {}
}
