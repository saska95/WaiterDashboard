import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Order } from '../shared/models/Order';
import { OrderItem } from '../shared/models/OrderItem';

//Dostupini na nivou celog projekta
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // // write data to name.json
  // sendData(data:any) {
  //  return this.http.post<any>('https://waiterdashboard-default-rtdb.europe-west1.firebasedatabase.app/name.json',{id:123,name:"Pa sta"});
  // }

  // // write data to name.json
  // sendDataWaiter(data:any) {
  //   return this.http.post<any>('https://waiterdashboard-default-rtdb.europe-west1.firebasedatabase.app/waiter.json',data);
  // }

  // get
  //  getData(data:any) {
  //   return this.http.get<any>(`https://waiterdashboard-default-rtdb.europe-west1.firebasedatabase.app/${data}.json`);
  // }

  //get drinks from firebase
  getDrinks() {
    return this.http.get<any>(
      `https://waiterdashboard-default-rtdb.europe-west1.firebasedatabase.app/database/2/product.json`
    );
  }

  // Ovde treba da narpravis POST i GET za ordersItemSArray

  //Podaci o svim stolovima za dati json (na klik)
  getTableDetails(data: any) {
    return this.http.get<any>(
      `https://waiterdashboard-default-rtdb.europe-west1.firebasedatabase.app/database/3/table/${data}.json`
    );
  }

  //Podaci o svim stolovima
  getAllTables() {
    return this.http
      .get<any>(
        `https://waiterdashboard-default-rtdb.europe-west1.firebasedatabase.app/database/3/table.json`
      )
      .pipe(take(1))
      .toPromise();
  }

  //Postavljamo order u bazu
  saveOrder(data: Order) {
    return this.http
      .post<any>(
        `https://waiterdashboard-default-rtdb.europe-west1.firebasedatabase.app/database/4/order.json`,
        data
      )
      .pipe(take(1))
      .toPromise();
  }

  saveOrderItem(data: OrderItem, orderId: string) {
    return this.http
      .post<any>(
        `https://waiterdashboard-default-rtdb.europe-west1.firebasedatabase.app/database/4/order/${orderId}/orderItems.json`,
        data
      )
      .pipe(take(1))
      .toPromise();
  }

  getOrderItems(orderId: string) {
    return this.http
      .get<any>(
        `https://waiterdashboard-default-rtdb.europe-west1.firebasedatabase.app/database/4/order/${orderId}/orderItems.json`
      )
      .pipe(take(1))
      .toPromise();
  }

  //setovanje activeorderid na table
  setActiveOrderId(tableId, tableActiveOrderId) {
    return this.http
      .patch<any>(
        `https://waiterdashboard-default-rtdb.europe-west1.firebasedatabase.app/database/3/table/${tableId}.json`,
        { activeOrderId: tableActiveOrderId }
      )
      .pipe(take(1))
      .toPromise();
  }
}
