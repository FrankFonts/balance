import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SpendingList, SpendingItem } from '../interfaces';

@Component({
  selector: 'app-spending-list',
  templateUrl: './spending-list.component.html',
  styleUrls: ['./spending-list.component.scss'],
})
export class SpendingListComponent implements OnInit {
  @Input() spendingList: SpendingList = { name: '', ID: 0, list: [] };

  spendingItemValue: string = '';
  spendingItemName: string = '';

  updateNewSpendingListItem(value: string, name: string) {
    this.spendingItemValue = value;
    this.spendingItemName = name;
  }

  addNewSpendingListItem(event: KeyboardEvent, value: string, name: string) {
    this.spendingItemValue = value.trim();
    this.spendingItemName = name.trim();

    if (
      event.key == 'Enter' &&
      this.spendingItemName !== '' &&
      this.spendingItemValue !== ''
    ) {
      this.spendingList.list.push({
        spendingItemValue: +this.spendingItemValue || 0,
        spendingItemName: this.spendingItemName || '',
      });

      this.spendingItemValue = '';
      this.spendingItemName = '';

      this.spendingListChange.emit(this.spendingList);
    }
  }

  calculateTotal() {
    let sum = this.spendingList.list.reduce(
      (total: number, item: SpendingItem) => {
        return (total += item.spendingItemValue);
      },
      0
    );

    return sum;
  }

  @Output() spendingListChange = new EventEmitter<SpendingList>();

  constructor() {}

  ngOnInit(): void {}
}
