import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TableDetailsComponent } from '../table-details/table-details.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() size: number;
  @Input() id: number;
  @Input() activeOrderId: number;
  @Output('reload') reload: EventEmitter<any> = new EventEmitter();

  numbers: number[];
  tableDetails: any;
  jsonNumber: number;

  constructor(public modalController: ModalController) {}

  ngOnInit() {
    if (!this.size || (this.size !== 2 && this.size !== 3 && this.size !== 4)) {
      this.size = 4;
    }
    this.numbers = Array(this.size)
      .fill(0)
      .map((x, i) => i);
  }

  async openTableDetails(idStola: number) {
    this.jsonNumber = idStola - 1;

    const modal = await this.modalController.create({
      component: TableDetailsComponent,
      componentProps: {
        tableJsonNumber: this.jsonNumber,
        tableActiveOrderId: this.activeOrderId,
      },
    });
    modal.onDidDismiss().then(() => this.reload.emit());
    return await modal.present();
  }
}
