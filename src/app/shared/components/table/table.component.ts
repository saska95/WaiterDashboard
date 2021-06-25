import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { element } from 'protractor';
import { Table } from '../../models/Table';
import { TableDetailsComponent } from '../table-details/table-details.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  @Input() size: number;
  @Input() id: number;

  numbers: number[];
  tableObject: any;

  constructor(public modalController: ModalController, private http: HttpClient) {


   }

  ngOnInit() {
    if(!this.size || (this.size!==2 && this.size!==3 && this.size!==4)){
      this.size=4;
    }
    console.log(this.size);
    this.numbers = Array(this.size).fill(0).map((x,i)=>i);
    console.log(this.numbers);

  }

  async openTableDetails(){
    //zahtev za detalje o stolu i onda njih stampam
    //get
    this.tableObject= this.http.get<any>('https://waiterdashboard-default-rtdb.europe-west1.firebasedatabase.app/database/3/table.json').subscribe(
      response =>{
        this.tableObject=response;
        console.log(this.tableObject,"EVO DETALJA O STOLU NA KLIK STOLA");
      }
    );


    const modal = await this.modalController.create({
      component: TableDetailsComponent
    });
    return await modal.present();

  }

}
