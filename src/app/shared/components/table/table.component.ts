import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { ApiService } from 'src/app/services/api.service';
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
  public orderDetails: any;
  public loggedUser: any;
  jsonNumber: number;

  constructor(
    public modalController: ModalController,
    public apiService: ApiService,
    public authService: AuthService
  ) {}

  async ngOnInit() {
    if (!this.size || (this.size !== 2 && this.size !== 3 && this.size !== 4)) {
      this.size = 4;
    }
    this.numbers = Array(this.size)
      .fill(0)
      .map((x, i) => i);

    if (this.activeOrderId !== -1) {
      this.orderDetails = await this.apiService.getOrderDetails(
        this.activeOrderId
      );
      this.loggedUser = await this.authService.getLoggedUser();
    }
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
