import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpendingList } from '../interfaces';

export interface Data {
  record: Array<SpendingList>;
  metadata: object;
}

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  endpoint = 'https://api.jsonbin.io/v3/b/6352ae7e65b57a31e69dfd77';

  constructor(private httpClient: HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'X-Master-Key':
        '$2b$10$povessZl6sgLY.l8tHmHru4Lkkmff8kxsxan/8UIzZcrSLNV2rCtO',
      'Content-Type': 'application/json',
    }),
  };

  getData(): Observable<Data> {
    return this.httpClient
      .get<Data>(this.endpoint, this.httpHeader)
      .pipe(retry(1), catchError(this.processError));
  }

  updateData(data: Array<SpendingList>): Observable<Array<SpendingList>> {
    return this.httpClient
      .put<Array<SpendingList>>(this.endpoint, JSON.stringify(data), this.httpHeader)
      .pipe(retry(1), catchError(this.processError));
  }

  processError(err: any) {
    let message = 'Uh, oh, something went wrong... ';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(() => {
      message;
    });
  }

  // getUsers(): Observable<User> {
  //   return this.httpClient
  //     .get<User>(this.endpoint + '/users')
  //     .pipe(retry(1), catchError(this.processError));
  // }

  // getSingleUser(id: any): Observable<User> {
  //   return this.httpClient
  //     .get<User>(this.endpoint + '/users/' + id)
  //     .pipe(retry(1), catchError(this.processError));
  // }

  // addUser(data: any): Observable<User> {
  //   return this.httpClient
  //     .post<User>(
  //       this.endpoint + '/users',
  //       JSON.stringify(data),
  //       this.httpHeader
  //     )
  //     .pipe(retry(1), catchError(this.processError));
  // }

  // updateUser(id: any, data: any): Observable<User> {
  //   return this.httpClient
  //     .put<User>(
  //       this.endpoint + '/users/' + id,
  //       JSON.stringify(data),
  //       this.httpHeader
  //     )
  //     .pipe(retry(1), catchError(this.processError));
  // }

  // deleteUser(id: any) {
  //   return this.httpClient
  //     .delete<User>(this.endpoint + '/users/' + id, this.httpHeader)
  //     .pipe(retry(1), catchError(this.processError));
  // }
}
