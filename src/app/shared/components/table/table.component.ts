import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { element } from 'protractor';
import { ApiService } from 'src/app/services/api.service';
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
  tableDetails: any;
  jsonNumber: number;

  constructor(
    public modalController: ModalController,
    private http: HttpClient,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    if (!this.size || (this.size !== 2 && this.size !== 3 && this.size !== 4)) {
      this.size = 4;
    }
    console.log(this.size);
    this.numbers = Array(this.size)
      .fill(0)
      .map((x, i) => i);
    console.log(this.numbers);
  }

  async openTableDetails(idStola: number) {
    console.log(idStola, 'OD STOLA NA KOJI SAM KLIKNULA');
    this.jsonNumber = idStola - 1;

    console.log(this.jsonNumber, 'od jsona kog bi trebalo da otvori');
    this.tableDetails = this.apiService
      .getTableDetails(this.jsonNumber)
      .subscribe((response) => {
        this.tableDetails = response;
        console.log(response.activeOrderId, 'OVDE VRATI SVE PODATKE O STOLU');
        console.log(this.tableDetails, 'OVDE VRATI SVE PODATKE O STOLU');

        if (this.tableDetails.activeOrderId === -1) {
          console.log(
            'ACTIVE ORDER JE -1 PA OTVORI TABLE DETAILS COMPONENT',
            this.tableDetails.activeOrderId
          );
        } else {
          console.log(
            'ACTIVE ORDER JE NIJE -1 PA DOVUCI ORDER ZA TAJ ID',
            this.tableDetails.activeOrderId
          );
        }
      });

    const modal = await this.modalController.create({
      component: TableDetailsComponent,
    });
    return await modal.present();
  }
}
