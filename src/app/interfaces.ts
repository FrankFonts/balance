export interface SpendingList {
  name: string;
  list: Array<SpendingItem>;
  listTotal: number;
}

export interface SpendingItem {
  spendingItemValue: number;
  spendingItemName: string;
}
