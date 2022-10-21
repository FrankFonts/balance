import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SpendingList, SpendingItem } from '../../interfaces';

@Component({
  selector: 'app-spending-list',
  templateUrl: './spending-list.component.html',
  styleUrls: ['./spending-list.component.scss'],
})
export class SpendingListComponent implements OnInit {
  @Input() spendingList: SpendingList = {
    name: '',
    list: [],
    listTotal: 0,
  };
  @Input() listTotal: number | undefined;

  @Output() spendingListChange = new EventEmitter<SpendingList>();

  spendingItemValue: string = '';
  spendingItemName: string = '';

  updateNewSpendingListItem(value: string, name: string) {
    this.spendingItemValue = value;
    this.spendingItemName = name;
  }

  addNewSpendingListItem(event: KeyboardEvent, value: string, name: string) {
    // update data
    this.spendingItemValue = value.trim();
    this.spendingItemName = name.trim();

    if (event.key == 'Enter' && this.spendingItemValue !== '') {
      this.spendingList.list.push({
        spendingItemValue: +this.spendingItemValue || 0,
        spendingItemName: this.spendingItemName || '',
      });
      this.spendingList.listTotal = this.calculateTotal(this.spendingList);

      // emit updated list
      this.spendingListChange.emit(this.spendingList);

      // reset values
      this.spendingItemValue = '';
      this.spendingItemName = '';
    }
  }

  calculateTotal(spendingList: SpendingList) {
    let sum = spendingList.list.reduce((total: number, item: SpendingItem) => {
      return (total += item.spendingItemValue);
    }, 0);

    return sum;
  }

  constructor() {}

  ngOnInit(): void {}
}
