export interface SpendingList {
  name: string;
  ID: number | string;
  list?: Array<SpendingItem>;
}

export interface SpendingItem {
  balanceItemValue: number;
  balanceItemName: string;
}

export const spendings: Array<SpendingList> = [
  {
    name: 'M',
    ID: 'm',
    list: [],
  },
  {
    name: 'B',
    ID: 'b',
    list: [],
  },
];