import { Component, Input } from '@angular/core';
import { SpendingList } from '../interfaces';

@Component({
  selector: 'app-calculate-balance',
  templateUrl: './calculate-balance.component.html',
  styleUrls: ['./calculate-balance.component.scss'],
})
export class CalculateBalanceComponent {
  @Input() spendings: Array<SpendingList> = [
    {
      name: '',
      list: [],
      listTotal: 0,
    },
    {
      name: '',
      list: [],
      listTotal: 0,
    },
  ];

  calculateBalance() {
    const mTotal = this.spendings[0].listTotal;
    const bTotal = this.spendings[1].listTotal;

    return bTotal - mTotal < 0 ? (bTotal - mTotal) * -1 : bTotal - mTotal;
  }

  calculatePerson() {
    const mTotal = this.spendings[0].listTotal;
    const bTotal = this.spendings[1].listTotal;

    if (mTotal === bTotal) {
      return 'Egal';
    }
    if (mTotal < bTotal) {
      return 'Béci';
    }
    if (mTotal > bTotal) {
      return 'Marcsi';
    } else {
      return undefined;
    }
  }
}
