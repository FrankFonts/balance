import { Component, OnInit } from '@angular/core';
import { SpendingList } from './interfaces';
import { Data, CrudService } from './shared/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  spendings?: Array<SpendingList>;

  updateSpendingList(spendingList: SpendingList) {
    localStorage.setItem('balance-app-data', JSON.stringify(this.spendings));
  }

  constructor(public crudService: CrudService) {
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

  //
  //
  // testing simple http requests
  // moving data to https://jsonbin.io
  //
  ngOnInit(): void {
    this.getData();
  }

  myData!: Data;

  //
  // testing http GET as service
  //
  getData() {
    return this.crudService.getData().subscribe((res) => {
      this.myData = res;
    });
  }

  //
  // testing http GET as service
  //
  updateData() {
    if (window.confirm('Yes, please...')) {
      this.crudService.updateData(this.myData.record).subscribe((res) => {
        console.log(`Data has been sent: ` + res);
      });
    }
  }
}
