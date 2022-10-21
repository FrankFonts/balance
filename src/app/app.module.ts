import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpendingListComponent } from './components/spending-list/spending-list.component';
import { CalculateBalanceComponent } from './components/calculate-balance/calculate-balance.component';

@NgModule({
  declarations: [
    AppComponent,
    SpendingListComponent,
    CalculateBalanceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
