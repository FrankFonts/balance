import { Component, Input, OnInit } from '@angular/core';
import { SpendingList } from '../../interfaces';

@Component({
  selector: 'app-calculate-balance',
  templateUrl: './calculate-balance.component.html',
  styleUrls: ['./calculate-balance.component.scss'],
})
export class CalculateBalanceComponent implements OnInit {
  @Input() spendings?: Array<SpendingList> = [];

  calculateBalance(): number | undefined {
    if (this.spendings) {
      const mTotal = this.spendings[0].listTotal;
      const bTotal = this.spendings[1].listTotal;

      return bTotal - mTotal < 0 ? (bTotal - mTotal) * -1 : bTotal - mTotal;
    }
    return 0;
  }

  calculatePerson() {
    if (this.spendings) {
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

    return undefined;
  }

  personOne: string = '';
  personTwo: string = '';

  ngOnInit(): void {
    if (this.spendings) {
      this.personOne = this.spendings[0].name;
      this.personTwo = this.spendings[0].name;
    }
  }
}
