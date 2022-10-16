import { Component, OnInit, Input } from '@angular/core';
import { SpendingList } from '../interfaces';

@Component({
  selector: 'app-spending-list',
  templateUrl: './spending-list.component.html',
  styleUrls: ['./spending-list.component.scss'],
})
export class BalanceComponent implements OnInit {
  @Input() spendingList: SpendingList = { name: '', ID: 0 };

  constructor() {}

  ngOnInit(): void {}
}
