import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Waiter } from '../shared/models/Waiter';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Table } from '../shared/models/Table';

//Dostupini na nivou celog projekta
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // // write data to name.json
  // sendData(data:any) {
  //   return this.http.post<any>('https://waiterdashboard-default-rtdb.europe-west1.firebasedatabase.app/name.json',{id:123,name:"Pa sta"});
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
  getDrinks(){
    return this.http.get<any>(`https://waiterdashboard-default-rtdb.europe-west1.firebasedatabase.app/database/2/product.json`)
  }

  // Ovde treba da narpravis POST i GET za ordersItemSArray

  //Podaci o stolovima
  getTableDetails(data:any){
    console.log(data);
    return this.http.get<any>(`https://waiterdashboard-default-rtdb.europe-west1.firebasedatabase.app/database/3/table/${data}.json`)
  }


   //Postavljamo order u bazu
   saveOrder(data:any){

    //  console.log(data, "evo sta pokusa da ubaci u bazu");
    // return this.http.post<any>(`https://waiterdashboard-default-rtdb.europe-west1.firebasedatabase.app/database/4/order/saska.json`,data);

   }
}
